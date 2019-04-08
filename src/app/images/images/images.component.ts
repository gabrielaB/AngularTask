import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ImageModel} from '../../shared/models/image.model';
import {GoogleSearchService} from '../../shared/services/google-search-service.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {
  @Output() imageWasSelected = new EventEmitter<any>();
  images: ImageModel[];

  constructor(private searchService: GoogleSearchService) {
  }

  ngOnInit() {
    this.loadImageResults();
  }

  update(event){
    this.loadImageResults(event.target.value)
  }

  loadImageResults(query = '') {
    this.searchService.getAllImagesResults(query)
      .subscribe(res => {
        console.log(res);
        this.images = res.items;
      });
  }


}
