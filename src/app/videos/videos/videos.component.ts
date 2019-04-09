import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {VideoModel} from '../../shared/models/video.model';
import {YoutubeService} from '../../shared/services/youtube-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  videos: VideoModel[];

  constructor(private youtubeService: YoutubeService) {
  }


  ngOnInit() {
    this.loadAllVideos();
  }

  update(event) {
    this.loadAllVideos(event.target.value);
  }

  loadAllVideos(query = '') {
    this.youtubeService.getAllVideosResults(query)
      .subscribe(res => {
        this.videos = res.items;
      });
  }

}
