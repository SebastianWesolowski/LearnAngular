import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  @Output() buttonEditPlaylistClick = new EventEmitter();

  @Input() playlist;

  constructor() {}

  ngOnInit(): void {}

  editPlaylist(playlist) {
    this.buttonEditPlaylistClick.emit(playlist);
  }
}
