import {Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicContentService} from './shared/services/dynamic-content-service.service';
import {ContentContainerComponent} from './dynamic/dynamic-container/content-container.component';
import {DynamicContentComponent} from './dynamic/dynamic-content/dynamic-content.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'images';
  service:DynamicContentService;
  componentRef: any;
  @ViewChild('dynamic', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(@Inject(DynamicContentService) service, private resolver: ComponentFactoryResolver) {
    this.service = service
   }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    console.log('feature')
    this.loadedFeature = feature;
  }

  createTab(tab){
    console.log(tab)
     const factory = this.resolver.resolveComponentFactory(DynamicContentComponent);
     this.componentRef = this.entry.createComponent(factory);
  }
}
