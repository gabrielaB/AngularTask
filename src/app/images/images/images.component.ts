import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ImageModel} from '../../shared/models/image.model';
import {GoogleSearchService} from '../../shared/services/google-search-service.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {
  images: ImageModel[];

  constructor(private searchService: GoogleSearchService) {
  }

  ngOnInit() {
    // this.loadImageResults();
  }

  loadImageResults(event) {
    this.searchService.getAllImagesResults(event.target.value)
      .subscribe(res => {
        console.log(res);
        this.images = res.items;
      });
  }

  load(event) {
    console.log('in method');
  }


}
