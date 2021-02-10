import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-fullwidth',
  templateUrl: './template-fullwidth.component.html',
  styleUrls: ['./template-fullwidth.component.scss']
})
export class TemplateFullwidthComponent {
  @Input() title!: string;
  constructor() {
  }

}
