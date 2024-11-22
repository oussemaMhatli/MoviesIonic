import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isSearching: boolean = false; // Tracks whether the search input is active
  constructor() {}

  toggleSearch() {
    console.log('toggleSearch');
    this.isSearching = !this.isSearching;
  }



}
