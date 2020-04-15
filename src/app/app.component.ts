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

  playlist = {
    name: 'The best of EduWeb!',
    tracks: 23,
    color: '#FF0000',
    favourite: true
  };

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
    this.mode = 'selected';
    this.selected = playlist;
  }

  onSaveButtonClick(event) {
    console.log('Zapisano', event);
  }
}
