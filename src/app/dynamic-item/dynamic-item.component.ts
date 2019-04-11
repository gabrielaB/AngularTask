import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
})
export class DynamicItemComponent {
  @Input() image: any;

  constructor() {

  }

}
