import { PlaylistService } from './playlist.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  public edited = {};

  public selected = null;
  public colectionPlaylist = [];
  public mode = 'none';

  constructor(private _playlistService: PlaylistService) {
    this.colectionPlaylist = this._playlistService.getPlaylistColection();
  }

  ngOnInit(): void {}

  editPlaylist(playlist) {
    this.mode = 'edit';
    this.selected = playlist;
    this.edited = Object.assign({}, playlist);
  }

  onCreateButtonClick() {
    this.mode = 'edit';
    const newPlaylist = {
      name: '',
      tracks: 0,
      color: '#0000FF',
      favourite: false
    };
    this.selected = newPlaylist;
    this.edited = Object.assign({}, newPlaylist);
  }

  selectPlaylist(playlist) {
    console.log('select,', playlist);
    if (playlist !== this.selected) {
      this.mode = 'selected';
      this.selected = playlist;
    }
  }

  savePlaylist(playlist) {
    if (playlist.id) {
      const index = this.colectionPlaylist.findIndex(oldPlaylist => {
        return oldPlaylist.id === playlist.id;
      });
      this.colectionPlaylist.splice(index, 1, playlist);
    } else {
      playlist.id = Date.now();
      this.colectionPlaylist.push(playlist);
    }
    this.mode = 'none';
  }
}
