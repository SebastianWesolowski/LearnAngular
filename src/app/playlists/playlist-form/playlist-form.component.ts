import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  @Output() saveButtonClick = new EventEmitter();

  @Input() playlist;
  constructor() {}

  ngOnInit(): void {}

  savePlaylist(playlist) {
    const copy = Object.assign({}, playlist);
    this.saveButtonClick.emit(copy);
  }
}
