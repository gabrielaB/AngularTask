import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ImageModel} from '../../shared/models/image.model';
import {GoogleSearchService} from '../../shared/services/google-search-service.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  images: ImageModel[];

  constructor(private searchService: GoogleSearchService) {
  }

  ngOnInit() {
  }

  loadImageResults(event) {
    console.log('in method');
    this.searchService.getAllImagesResults(event)
      .pipe(debounceTime(200))
      .subscribe(res => {
        console.log(res);
        this.images = res.items;
      });
  }
}

