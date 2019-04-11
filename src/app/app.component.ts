import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ContentChildren,
  Inject, Input,
  OnInit, QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DynamicContentService} from './shared/services/dynamic-content-service.service';
import {DynamicContentComponent} from './dynamic/dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'images';
  @ViewChild('dynamic', {read: ViewContainerRef}) entry: ViewContainerRef;
  dynamicTabs: DynamicContentComponent[] = [];
  @ContentChildren(DynamicContentComponent) tabs: QueryList<DynamicContentComponent>;
  @ViewChild(DynamicContentComponent) dynamicComponent;

  constructor(private dynamicService:  DynamicContentService,
              private r: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }
  //
  // onNavigate(feature: string) {
  //   console.log('feature');
  //
  // }


  onSelect(feature: string) {
    this.loadedFeature = feature;
  }


  createTab(title) {
    // const ul = document.getElementById('tabs-list');
    // const li = document.createElement('li');
    // const a = document.createElement('a');
    // const btn = document.createElement('button');
    // const span = document.createElement('span');
    //
    // a.classList.add('tabs-links');
    // btn.classList.add('close');
    // span.innerHTML = '&times;';
    // btn.appendChild(span);
    // btn.classList.add('close');
    // const textnode = document.createTextNode('New tab');
    // a.appendChild(textnode);
    // a.appendChild(btn);
    // li.appendChild(a);
    // ul.appendChild(li);
    this.dynamicService.setRootViewContainerRef(this.entry);
    // const factory = this.dynamicService.addDynamicComponent();
    // console.log(factory)
    const factory = this.r.resolveComponentFactory(DynamicContentComponent);
    const componentRef = this.entry.createComponent(factory);
    const instance: DynamicContentComponent = componentRef.instance as DynamicContentComponent;
    instance.title = title;

    this.dynamicTabs.push(componentRef.instance as DynamicContentComponent);
  }
   closeTab(tab: DynamicContentComponent) {
     for (let i = 0; i < this.dynamicTabs.length; i++) {
       if (this.dynamicTabs[i] === tab) {
         // remove the tab from our array
         this.dynamicTabs.splice(i, 1);

         // destroy our dynamically created component again
         let viewContainerRef = this.entry;

         viewContainerRef.remove(i);

         // set tab index to 1st one
         // this.selectTab(this.tabs.first);
         break;
       }
     }
   }
}


