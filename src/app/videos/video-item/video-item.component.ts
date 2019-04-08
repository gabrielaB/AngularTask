import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html'
})
export class VideoItemComponent {
  @Input() video: any;

}
