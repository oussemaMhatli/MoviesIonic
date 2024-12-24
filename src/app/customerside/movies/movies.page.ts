import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore'; // Importation nécessaire
import { inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: any[] = [];
    private firestore: Firestore = inject(Firestore); // Injection de Firestore

  constructor(private toast:ToastController) { }

  ngOnInit() {
    console.log('movies,,,,');
    this.fetchMovies();
  }
  randomFilm = this.getRandomFilm();

  getRandomFilm() {
    const randomIndex = Math.floor(Math.random() * this.movies?.length);
    return this.movies[randomIndex];
  }
getFilms() {}
async fetchMovies() {
  console.log(this.movies,'film');

  try {
    const moviesCollection = collection(this.firestore, 'films'); // Référence à la collection 'movies'
    const moviesSnapshot = await getDocs(moviesCollection); // Récupération des documents
    this.movies = moviesSnapshot.docs.map(doc => ({
      id: doc.id, // ID du document
      ...doc.data() // Données du film
    }));
   console.log(this.movies,'film');

  } catch (error) {
    console.error('Erreur lors de la récupération des films :', error);
  }
}

async addFav(movieId: string) {
  // Log the movieId for debugging
  console.log('Movie ID: ' + movieId);

  // Get the userId from localStorage
  const userId = localStorage.getItem('id');

  // Check if userId is available
  if (!userId) {
    alert('User not logged in. Please log in first.');
    return;
  }

  // Prepare the data for the favorite document
  const favoriteData = {
    userId: userId,
    movieId: movieId,
    createdAt: new Date(),  // Optional: Store the timestamp when the favorite is added
  };

  try {
    // Add the favorite record to the Firestore 'favorites' collection
    await addDoc(collection(this.firestore, 'favorites'), favoriteData);
    console.log('Movie added to favorites successfully.');

    // Optional: Show success message or trigger a UI update
    const toast = await this.toast.create({
      message: "movie added to favorite",
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();

  } catch (error) {
    console.error('Error adding favorite movie:', error);
    alert('An error occurred while adding the movie to favorites. Please try again.');
  }
}


























  categories = [
    { name: 'Movies', id: 1 },
    { name: 'Music', id: 2 },
    { name: 'Books', id: 3 },
    { name: 'Sports', id: 4 },
    { name: 'Games', id: 5 },
    { name: 'News', id: 6 },
  ];

}
