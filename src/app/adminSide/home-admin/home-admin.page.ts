import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore'; // Importation nécessaire
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {
  users: any[] = []; // Pour stocker les utilisateurs récupérés
  movies: any[] = []; // Pour stocker la liste des films statiques
  displayedList: any[] = []; // Liste affichée, qui changera entre utilisateurs et films
  private firestore: Firestore = inject(Firestore); // Injection de Firestore

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.fetchUsers(); // Récupérer les utilisateurs à l'initialisation
    this.fetchMovies(); // Récupérer la liste des films statiques
  }

  // Fonction pour récupérer les utilisateurs depuis Firestore
  async fetchUsers() {
    try {
      const usersCollection = collection(this.firestore, 'users'); // Référence à la collection 'users'
      const usersSnapshot = await getDocs(usersCollection); // Récupérer tous les documents de la collection 'users'
      
      this.users = usersSnapshot.docs
        .map(doc => {
          const userData = doc.data(); // Récupérer les données de chaque document
          return {
            id: doc.id, // Ajouter l'ID du document
            ...userData
          };
        })
      this.users = this.users.filter(user => user.role?.toLowerCase() !== 'admin'); // Filtrer les admins
      
      console.log('Utilisateurs non-admins:', this.users);
      this.displayedList = this.users; // Afficher les utilisateurs dès qu'ils sont récupérés

    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  }

  // Fonction pour récupérer la liste des films statiques
  fetchMovies() {
    // Liste statique de films
    this.movies = [
      { title: 'Inception', genre: 'Science Fiction' },
      { title: 'The Dark Knight', genre: 'Action' },
      { title: 'Interstellar', genre: 'Drama' },
    ];

    console.log('Films:', this.movies);
  }

  // Fonction pour changer la liste affichée selon le segment
  onSegmentChange(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue === 'all') {
      this.displayedList = this.users; // Afficher les utilisateurs
    } else if (selectedValue === 'favorites') {
      this.displayedList = this.movies; // Afficher les films statiques
    }
  }

  // Fonction pour désactiver un utilisateur
  deactivateUser(userId: string) {
    const userDocRef = doc(this.firestore, 'users', userId);

    getDoc(userDocRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        updateDoc(userDocRef, {
          state: 0
        }).then(() => {
          this.showToast('Utilisateur désactivé avec succès', 'success');
          console.log('Utilisateur désactivé avec succès');
        }).catch((error) => {
          console.error('Erreur lors de la désactivation de l\'utilisateur :', error);
        });
      } else {
        console.error('Aucun document trouvé avec l\'ID:', userId);
      }
    }).catch((error) => {
      console.error('Erreur lors de la vérification de l\'existence du document :', error);
    });
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
