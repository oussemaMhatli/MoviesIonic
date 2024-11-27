import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { jwtDecode } from "jwt-decode";
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPassword = false;
  toggleVisible = false;

  constructor(
    private auth: Auth,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Enter');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onPasswordInput(event: any): void {
    const value = event.target.value;
    this.toggleVisible = value && value.length > 0;
  }

  // Example function to decode JWT
  async decodeToken(token: string): Promise<any> {
    try {
      return jwtDecode(token); // Decode JWT token to extract UID and other data
    } catch (Error) {
      console.error('Invalid token', Error);
      return null;
    }
  }



  // Login function with Firestore query for user data
  async login(form: NgForm) {
    const { email, password } = form.value;

    if (!email || !password) {
      this.showToast('All fields are required', 'danger');
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
      this.showToast('Signed in successfully', 'success');
      console.log('User signed in successfully:', user);
      console.log('Token:', token);

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Decode the token and get the UID
      const decodedToken = await this.decodeToken(token);
      console.log('Decoded Token:', decodedToken);

      // Retrieve user data from Firestore using the UID
      if (decodedToken) {
         console.log('User Data:', JSON.stringify(decodedToken.email));
         if(decodedToken.email=='admin@admin.com'){
          this.router.navigate(['/home-admin']);
         }else{
          this.router.navigate(['/home/mv']);
         }
      }

      // Optionally, navigate to another page
      // this.router.navigate(['/home/mv']);
    } catch (error: any) {
      this.showToast(error.message, 'danger');
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
