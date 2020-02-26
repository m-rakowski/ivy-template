import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
