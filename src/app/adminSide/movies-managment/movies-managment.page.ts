import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Firestore import
import { inject } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem'; // Import de Filesystem pour le stockage local
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-movies-managment',
  templateUrl: './movies-managment.page.html',
  styleUrls: ['./movies-managment.page.scss'],
})
export class MoviesManagmentPage implements OnInit {
  movieTitle: string = ''; // Stocke le titre du film
  movieDescription: string = ''; // Stocke la description du film
  movieImage: any; // Stocke le fichier image sélectionné
  progress: number = 0; // Progrès de l'upload de l'image
  uploading: boolean = false; // Etat pour vérifier si l'image est en cours de téléchargement

  private firestore: Firestore = inject(Firestore); // Injection de Firestore
  capturedImage: string | undefined; // L'URL de l'image capturée
  savedImageName: string | undefined; // Nom du fichier sauvegardé

  constructor() {}

  ngOnInit() {}

  // Fonction pour sauvegarder l'image localement
  async saveImageToLocalAssets(imageDataUrl: string): Promise<string | null> {
    try {
      const fileName = `movie_${Date.now()}.jpg`; // Générer un nom de fichier unique
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

  // Ajouter un film dans Firestore
  async addMovie() {
    if (!this.movieTitle || !this.movieDescription || !this.capturedImage) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.uploading = true;

    try {
      // Sauvegarder l'image localement
      const savedImageName = await this.saveImageToLocalAssets(this.capturedImage);
      
      if (!savedImageName) {
        throw new Error('Erreur lors de la sauvegarde de l\'image localement');
      }

      // Ajouter le film dans la collection "films" de Firestore
      const movieData = {
        title: this.movieTitle,
        description: this.movieDescription,
        imageUrl: savedImageName, // Utiliser le nom de l'image enregistrée
      };

      await addDoc(collection(this.firestore, 'films'), movieData);
      console.log('Film ajouté avec succès');

      // Réinitialiser le formulaire après l'ajout
      this.movieTitle = '';
      this.movieDescription = '';
      this.capturedImage = '';
      this.progress = 0; // Réinitialiser la barre de progression
      this.uploading = false; // Changer l'état de l'upload à terminé
    } catch (error) {
      console.error('Erreur lors de l\'ajout du film:', error);
      alert('Erreur lors de l\'ajout du film');
      this.uploading = false; // Arrêter le processus de téléchargement en cas d'erreur
    }
  }

  // Fonction pour capturer l'image à partir de la caméra
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl,
      });

      this.capturedImage = image.dataUrl;
      console.log('Captured Image:', this.capturedImage);
    } catch (error) {
      console.error('Error capturing image: ', error);
    }
  }
}
