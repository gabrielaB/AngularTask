import {Component, EventEmitter, OnInit, Output} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() featureSelected = new EventEmitter<string>();
  @Output() inputSearch = new EventEmitter<string>();

  ngOnInit(): void {

  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  update(event) {
    console.log(event.target.value)
    this.inputSearch.emit(event.target.value);
  }
}
