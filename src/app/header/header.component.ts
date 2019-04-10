import {Component, ComponentFactoryResolver, EventEmitter, Inject, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicContentService} from '../shared/services/dynamic-content-service.service';
import {DynamicContentComponent} from '../dynamic/dynamic-content/dynamic-content.component';
import {ContentContainerComponent} from '../dynamic/dynamic-container/content-container.component';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();
  @Output() inputSearch = new EventEmitter<string>();

  name = 'from Angular'
  service:DynamicContentService;

  componentRef: any;
  // @ViewChild('dynamic', { read: ViewContainerRef }) entry: ViewContainerRef;
  @Output() createComponent = new EventEmitter<string>();

  // constructor(@Inject(DynamicContentService) service, private resolver: ComponentFactoryResolver) {
  //   //   this.service = service
  //   // }

  attachComponent(tab) {
    // const factory = this.resolver.resolveComponentFactory(ContentContainerComponent);
    // this.componentRef = this.entry.createComponent(factory);
    this.createComponent.emit(tab)
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
