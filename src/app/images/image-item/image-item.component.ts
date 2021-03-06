import {Component, Input} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {
  @Input() image: any;
  large: any;
 constructor() {}

  enlargeImg(image) {
    this.large = image;

    $('#imagemodal').modal('show');
  }
}
