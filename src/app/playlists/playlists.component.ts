import { PlaylistService } from './playlist.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  private _edited = {};

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
    this._edited = playlist;
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
    this._edited = newPlaylist;
  }

  selectPlaylist(playlist) {
    if (playlist !== this.selected) {
      this.mode = 'selected';
      this.selected = playlist;
    }
  }

  savePlaylist(playlist) {
    this.colectionPlaylist.push(playlist);
    console.log(playlist);
  }
}
