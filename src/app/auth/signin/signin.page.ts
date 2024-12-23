import { Component, inject, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { jwtDecode } from "jwt-decode";
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functions
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  showPassword = false;
  toggleVisible = false;
  private firestore: Firestore = inject(Firestore); 
  userData: any = null;
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
      const id=decodedToken.user_id;
      console.log('User ID:', id);
      // Retrieve user data from Firestore using the UID
      if (id) {
        this.userData = await this.fetchUserByUid(id);
         console.log('User data:', this.userData);

         if(this.userData.role=='admin'){
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



  async  fetchUserByUid(uid: string) {
    try {
        const usersCollection = collection(this.firestore, "users");

        const userQuery = query(usersCollection, where("uid", "==", uid));

        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = { id: userDoc.id, ...userDoc.data() };

            console.log("Données utilisateur :", userData);
            return userData;
        } else {
            console.error("Aucun utilisateur trouvé avec ce uid :", uid);
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        throw error;
    }
}
}
