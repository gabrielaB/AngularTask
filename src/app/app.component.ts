import {Component, ComponentFactoryResolver, ComponentRef, Inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicContentService} from './shared/services/dynamic-content-service.service';
import {DynamicContentComponent} from './dynamic/dynamic-content/dynamic-content.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'images';
  service: DynamicContentService;
  componentRef: any;
  @ViewChild('dynamic', {read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tabs') tabs;

  constructor(@Inject(DynamicContentService) service, private resolver: ComponentFactoryResolver) {
    this.service = service;
  }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    console.log('feature');
    this.loadedFeature = feature;
  }

  createTab(tab) {
    const ul = document.getElementById('tabs-list');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const btn = document.createElement('button');
    const span = document.createElement('span');

    a.classList.add('tabs-links');
    btn.classList.add('close');
    span.innerHTML = '&times;';
    btn.appendChild(span);
    btn.classList.add('close');
    const textnode = document.createTextNode('New tab');
    a.appendChild(textnode);
    a.appendChild(btn);
    li.appendChild(a);
    ul.appendChild(li);
    const factory = this.resolver.resolveComponentFactory(DynamicContentComponent);
    this.componentRef = this.entry.createComponent(factory);
  }
}


