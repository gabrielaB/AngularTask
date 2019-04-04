import {Component, OnInit} from '@angular/core';
import {TabContentModel} from '../../shared/models/tab-content-model';
import {GoogleSearchServiceService} from '../services/google-search-service.service';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  content: TabContentModel;
  tiles: TabContentModel[] = [];
  constructor(private searchService: GoogleSearchServiceService) {}

  ngOnInit() {
    this.loadImageResults();
  }

  loadImageResults() {
    this.searchService.getAllImagesResults()
      .subscribe(res => {
        console.log(res.items);
        this.tiles = res.items;
      });
  }
}
