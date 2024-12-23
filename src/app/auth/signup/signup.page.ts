import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, WriteFileResult } from '@capacitor/filesystem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showPassword = false;
  toggleVisible = false;
  capturedImage: string | undefined;
  savedImageName: string | undefined;

  constructor(private auth: Auth, private toastController: ToastController,private router: Router) {}

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
        quality: 100,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl,
      });
  
      this.capturedImage = image.dataUrl;
  
      console.log('Captured Image:', this.capturedImage);
  
      if (this.capturedImage) {
        const fileName = await this.saveImageToLocalAssets(this.capturedImage);
        if (fileName) {
          this.savedImageName = fileName; // Stocker le nom du fichier
          console.log('Image saved successfully:', this.savedImageName);
        } else {
          console.error('Failed to save image');
        }
      }
    } catch (error) {
      console.error('Error capturing image: ', error);
    }
  }
  

  async saveImageToLocalAssets(imageDataUrl: string): Promise<string | null> {
    try {
      const fileName = `profile_${Date.now()}.jpg`; // Générer un nom de fichier unique
      const path = `images/${fileName}`; // Stocker dans un sous-répertoire "images" dans le répertoire externe
      await Filesystem.writeFile({
        path: path,
        data: imageDataUrl.split(',')[1], // Enlever le préfixe "data:image/jpeg;base64,"
        directory: Directory.External, // Utiliser un répertoire externe
      });
      
  
      console.log('File saved:', fileName);
      return fileName; // Retourner uniquement le nom du fichier
    } catch (error) {
      console.error('Error saving image to assets/images:', error);
      return null;
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

      // Save user data in Firestore
      await addDoc(collection(getFirestore(), 'users'), {
        uid: userCredential.user.uid,
        email,
        firstName,
        lastName,
        age,
        state: 1,
        role: 'user',
        profileImage: this.capturedImage || '',
      });
      this.router.navigate(['/signin']);
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
