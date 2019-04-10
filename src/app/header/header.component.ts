import {Component, EventEmitter, Output } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
  @Output() inputSearch = new EventEmitter<string>();
  @Output() createComponent = new EventEmitter<string>();

  attachComponent(tab) {
    this.createComponent.emit(tab)
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
