import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
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

  getPlaylistColection() {
    return this.colectionPlaylist;
  }
  constructor() {}
}
