import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  @Output() playlistSelected = new EventEmitter();

  @Input() colectionPlaylist;
  @Input() selected;

  constructor() {}

  ngOnInit(): void {}

  selectPlaylist(playlist) {
    this.playlistSelected.emit(playlist);
  }
}
