import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-managment',
  templateUrl: './movies-managment.page.html',
  styleUrls: ['./movies-managment.page.scss'],
})
export class MoviesManagmentPage implements OnInit {
  movieTitle: string = ''; // Titre du film
  movieDescription: string = ''; // Description du film
  type:string="";
  capturedImage: string | undefined; // URL de l'image capturée (Base64)
  uploading: boolean = false; // Indique si le téléchargement est en cours
  savedImageName: string | undefined;

  private firestore: Firestore = inject(Firestore);

  constructor(private router: Router) {}

  ngOnInit() {}

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
      const fileName = `movie_${Date.now()}.jpg`; // Générer un nom unique
      const path = `images/${fileName}`;
      await Filesystem.writeFile({
        path: path,
        data: imageDataUrl.split(',')[1], // Enlever le préfixe
        directory: Directory.External,
      });

      console.log('File saved:', fileName);
      return fileName;
    } catch (error) {
      console.error('Error saving image to assets/images:', error);
      return null;
    }
  }

  async addMovie() {
    if (!this.movieTitle || !this.movieDescription || !this.capturedImage) {
      alert('Veuillez remplir tous les champs avant de soumettre.');
      return;
    }

    this.uploading = true;

    try {
      const movieData = {
        title: this.movieTitle,
        type:this.type,
        description: this.movieDescription,
        profileImage: this.capturedImage || '', // Stocker l'image en Base64
      };

      await addDoc(collection(this.firestore, 'films'), movieData);
      console.log('Film ajouté avec succès.');

      this.router.navigateByUrl('/home-admin');
      this.resetForm();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du film:', error);
      alert('Une erreur est survenue lors de l\'ajout du film.');
    } finally {
      this.uploading = false;
    }
  }

  resetForm() {
    this.movieTitle = '';
    this.movieDescription = '';
    this.type="";
    this.capturedImage = undefined;
  }
}
