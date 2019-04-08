import {Component, EventEmitter, Input, Output} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {
  @Input() image: any;
 constructor(public large:string) {}

  enlargeImg(image) {
    this.large = image;

    $('#imagemodal').modal('show');
  }
}
