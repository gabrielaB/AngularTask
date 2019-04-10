import {Component, EventEmitter, OnInit, Output} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Output() inputSearch = new EventEmitter<string>();

  ngOnInit(): void {

  }

  update(event) {
    console.log(event.target.value)
    this.inputSearch.emit(event.target.value);
  }
}
