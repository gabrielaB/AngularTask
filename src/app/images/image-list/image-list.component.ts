import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

import {ImageModel} from '../../shared/models/image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html'
})
export class ImageListComponent implements OnInit {
  @Input() images: ImageModel[];

  ngOnInit() {
  }
}
