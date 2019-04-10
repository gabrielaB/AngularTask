import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {VideoModel} from '../../shared/models/video.model';
import {YoutubeService} from '../../shared/services/youtube-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import {GoogleSearchService} from '../../shared/services/google-search-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  videos: VideoModel[];

  constructor(
    private youtubeService: YoutubeService) {
  }


  ngOnInit() {
  }


  loadImageResults(event) {
    this.youtubeService.getAllVideosResults(event)
      .subscribe(res => {
        this.videos = res.items;
      });
  }
}
