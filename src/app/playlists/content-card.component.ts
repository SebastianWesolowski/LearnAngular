import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <!-- <p class="card-text">{{ content }}</p> -->
        <ng-content></ng-content>
      </div>
    </div>
  `,
  inputs: ['title'],
  styles: []
})
export class ContentCardComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
