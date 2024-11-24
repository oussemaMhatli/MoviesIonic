import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPassword = false;
  toggleVisible = false;

  constructor(private auth: Auth, private toastController: ToastController) { }

  ngOnInit() {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword; 
  }

  onPasswordInput(event: any): void {
    const value = event.target.value; 
    this.toggleVisible = value && value.length > 0;
  }


  async login(form: NgForm) {
    const { email, password } = form.value;
  
    if (!email || !password) {
      this.showToast('All fields are required', 'danger')
      console.error('Missing form values. All fields are required');
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );  
      const user = userCredential.user;
      const token = await user.getIdToken(); 
      this.showToast('signed in successfully', 'success')
      console.log('User signed in successfully:', user);
      console.log('Token:', token);
  
      return token;
    } catch (error: any) {
      this.showToast(error.message, 'danger')
      console.error('Error signing in:', error);
      throw error; 
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
//