import { Injectable } from '@angular/core';
import { IPlayList } from '../interface/i-playlist';
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  PlaylistColection: IPlayList[] = [
    {
      id: 1,
      name: 'The best of EduWeb!',
      tracks: 23,
      color: '#FF0000',
      favourite: true
    },
    {
      id: 2,
      name: 'Angular Greatest Hits',
      tracks: 2,
      color: '#FFFF00',
      favourite: false
    }
  ];

  getPlaylistColection = () => this.PlaylistColection;
}
