import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Witaj w kursie Angular!';

  selected = null;

  edited = {};

  colectionPlaylist = [
    {
      name: 'The best of EduWeb!',
      tracks: 23,
      color: '#FF0000',
      favourite: true
    },
    {
      name: 'Angular Greatest Hits',
      tracks: 2,
      color: '#FFFF00',
      favourite: false
    }
  ];

  mode = 'none';

  constructor() {}

  onEditButtonClick(playlist) {
    this.mode = 'edit';
    this.selected = playlist;
    this.edited = playlist;
  }

  onCreateButtonClick() {
    this.mode = 'edit';
    const newPlaylist = {};
    this.selected = newPlaylist;
    this.edited = newPlaylist;
  }

  selectPlaylist(playlist) {
    if (playlist !== this.selected) {
      this.mode = 'selected';
      this.selected = playlist;
    }
  }

  onSaveButtonClick(event) {
    console.log('Zapisano', event);
  }
}
