import {Component} from '@angular/core';
import {TabContentModel} from '../../shared/models/tab-content-model';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent {
  content: TabContentModel;

  constructor() {

  }
}
