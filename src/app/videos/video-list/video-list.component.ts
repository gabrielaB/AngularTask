import {Component, OnInit, Input} from '@angular/core';
import {VideoModel} from '../../shared/models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html'
})
export class VideoListComponent implements OnInit {
  @Input() videos: VideoModel[];

  constructor() {
  }

  ngOnInit() {

  }
}
