import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html'
})
export class PlaylistFormComponent implements OnInit {
  @Output() saveButtonClick = new EventEmitter();

  @Input() playlist;
  constructor() {}

  ngOnInit(): void {}

  savePlaylist(playlist) {
    this.saveButtonClick.emit(playlist);
  }
}
