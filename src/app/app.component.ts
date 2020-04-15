import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Witaj w kursie Angular!';
  selected = null;

  edited = {
    name
  };

  playlist = {
    name: 'The best of EduWeb!',
    tracks: 23,
    color: '#FF0000',
    favourite: true
  };

  constructor() {}

  createBox(e) {
    const box = document.createElement('div') as HTMLDivElement;
    box.classList.add('box');
    box.style.top = `${e.offsetY}px`;
    box.style.left = `${e.offsetX}px`;
    box.style.width = `10px`;
    box.style.height = `10px`;
    box.style.position = `absolute`;
    box.style.background = `#000000`;

    e.toElement.appendChild(box);
  }

  onSaveButtonClick(event) {
    event.toElement.style.position = `relative`;
    this.createBox(event);
  }
}
