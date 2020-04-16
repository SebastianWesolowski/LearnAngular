import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
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

  ngOnInit(): void {}

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
