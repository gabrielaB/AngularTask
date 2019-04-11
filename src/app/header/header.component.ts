import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DynamicContentComponent} from '../dynamic/dynamic-content/dynamic-content.component';
import {DynamicContentService} from '../shared/services/dynamic-content-service.service';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() featureSelected = new EventEmitter<string>();
  @Output() inputSearch = new EventEmitter<string>();
  @Output() createComponent = new EventEmitter<string>();
  // @Input() dynamicTabs: DynamicContentComponent[] = []
  dynamicTabs: DynamicContentComponent[] = [];
  @ViewChild('dynamic', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(private dynamicService:  DynamicContentService, private r: ComponentFactoryResolver) {
  }
  // attachComponent(tab) {
  //      this.createComponent.emit(tab)
  //    }

  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  createTab(){
  this.createComponent.emit();
  }
}
