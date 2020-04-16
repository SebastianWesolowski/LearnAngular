import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ content }}</p>
      </div>
    </div>
  `,
  inputs: ['title', 'content'],
  styles: []
})
export class ContentCardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  constructor() {}

  ngOnInit(): void {}
}
