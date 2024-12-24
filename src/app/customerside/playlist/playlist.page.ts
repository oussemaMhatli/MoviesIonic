import { Component, inject, OnInit } from '@angular/core';
import { DocumentData, Firestore, addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from '@angular/fire/firestore'; // Importation nécessaire
import { Router } from '@angular/router';

// Define the Movie type
interface Movie {
  id: string;
  title: string;
  profileImage: string;
  description: string;
}

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  private firestore: Firestore = inject(Firestore); // Injection de Firestore

  constructor(private router: Router) {}

  // Declare playlist as an array of Movie objects
  playlist: Movie[] = [];

  ngOnInit() {
    console.log('Adding to playlist');
    this.fetchFavorites(); // Call fetchFavorites when the component is initialized
  }

  // Fetch favorites from Firestore
  async fetchFavorites() {
    const userId = localStorage.getItem('id');


    try {
      const favoritesRef = collection(this.firestore, 'favorites');
      const q = query(favoritesRef, where('userId', '==', userId));

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log('No favorites found for this user.');
        return;
      }

      querySnapshot.forEach((doc) => {
        const favorite = doc.data() as DocumentData;
        console.log(favorite);

        // Call function to fetch movie details for each favorite
        this.getMovieDetails(favorite['movieId']);

      });

    } catch (error) {
      console.error('Error fetching favorites:', error);
      alert('An error occurred while fetching your favorites.');
    }
  }

  // Fetch movie details by movieId
  async getMovieDetails(movieId: string) {
    try {
      const movieRef = doc(this.firestore, 'films', movieId); // Reference to the specific document
      const movieSnapshot = await getDoc(movieRef);

      if (movieSnapshot.exists()) {
        const movie = movieSnapshot.data() as Movie;
        console.log('Movie Details:', movie);

        // Check if the movie is already in the playlist
          this.playlist.push(movie); // Add the movie to the playlist if it's not already there
             console.log('playlist',this.playlist);
      } else {
        console.log('No such movie with ID:', movieId);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }


}
