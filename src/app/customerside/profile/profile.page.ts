import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, query, updateDoc, where } from '@angular/fire/firestore'; // Importation nécessaire

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor() { }
  private firestore: Firestore = inject(Firestore); 
  userData: any = null;
  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log('Decoded Token:', decodedToken);
      const id=decodedToken.user_id;
      console.log('User ID:', id);
      this.fetchUserByUid(id).then(userData => {
        this.userData = userData;
        console.log('User data:', this.userData.profileImage);
      }).catch(error => {
        console.error('Error fetching user data:', error);
      });
    }

    
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
