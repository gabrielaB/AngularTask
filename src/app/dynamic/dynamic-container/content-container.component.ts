import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageModel} from '../../shared/models/image.model';
import {GoogleSearchService} from '../../shared/services/google-search-service.service';
declare var $: any;

@Component({
  selector: 'app-container',
  templateUrl: './content-container.component.html',
})
export class ContentContainerComponent implements OnInit{
  @Output() inputSearch = new EventEmitter<string>();
  images: ImageModel[];

  constructor(private searchService: GoogleSearchService){

  }
  ngOnInit(): void {

  }

  loadImageResults(event) {
    console.log('in method');
    this.searchService.getAllImagesResults(event)
      .subscribe(res => {
        console.log(res);
        this.images = res.items;
      });
  }

}
