import { Component } from '@angular/core'

import { GemCollection } from './gem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test'
  playlist = {
    id: 1,
    name: 'test',
    track: 12,
    collor: '#ff00ff',
    favorite: true,
  }

  playlistArr = [
    {
      id: 1,
      name: 'test',
      track: 12,
      collor: '#ff00ff',
      favorite: true,
    },
    {
      id: 2,
      name: 'test',
      track: 12,
      collor: '#ff00ff',
      favorite: true,
    },
  ]

  size = 1.2

  styleBorder = '2px solid' + this.playlist.collor

  gemList = [
    new GemCollection(1, 'normal', 'basic cristal', 20),
    new GemCollection(2, 'normal', 'cristal', 21),
    new GemCollection(3, 'extra', 'extra cristal', 28),
    new GemCollection(4, 'epic', 'epic cristal', 50),
  ]

  selected = false
  onSave(event) {
    console.log('save', event)
  }
}
