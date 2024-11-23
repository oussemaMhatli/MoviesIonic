import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { getStorage, ref, uploadString, getDownloadURL } from '@firebase/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showPassword = false;
  toggleVisible = false;
  capturedImage: string | undefined;

  constructor(private auth: Auth, private toastController: ToastController) {}

  ngOnInit() {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onPasswordInput(event: any): void {
    const value = event.target.value;
    this.toggleVisible = value && value.length > 0;
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl,
      });
  
      this.capturedImage = image.webPath;
      console.log('Captured Image:', this.capturedImage); 
    } catch (error) {
      console.error('Error capturing image: ', error);
    }
  }
  
  // Sign up user
  async signup(form: NgForm) {
    const { email, password, firstName, lastName, age } = form.value;

    if (!email || !password || !firstName || !lastName || !age) {
      this.showToast('All fields are required', 'danger');
      console.error('Missing form values. All fields are required');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      this.showToast('Signed up successfully', 'success');
      console.log('User signed up successfully:', userCredential.user);

      let imageUrl = '';
      if (this.capturedImage && this.capturedImage.startsWith('data:image')) {
        const storage = getStorage();
        const imageRef = ref(storage, 'profile_pictures/' + userCredential.user.uid);
        const uploadTask = await uploadString(imageRef, this.capturedImage, 'data_url');
        
        imageUrl = await getDownloadURL(uploadTask.ref);
      } else {
        console.error('Captured image is invalid');
      }
      

      await addDoc(collection(getFirestore(), 'users'), {
        uid: userCredential.user.uid,
        email,
        firstName,
        lastName,
        age,
        profileImage: imageUrl,  
      });

    } catch (error) {
      this.showToast('Error signing up', 'danger');
      console.error('Error signing up:', error);
    }
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top',
    });
    toast.present();
  }
}
