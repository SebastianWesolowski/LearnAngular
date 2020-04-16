import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  @Input() playlist;
  constructor() {}

  ngOnInit(): void {}

  onSaveButtonClick(event) {
    console.log('Zapisano', event);
  }
}
