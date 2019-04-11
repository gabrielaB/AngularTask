import {
  ComponentFactoryResolver,
  Injectable,
  Inject
} from '@angular/core'
import {DynamicContentComponent} from '../../dynamic/dynamic-content/dynamic-content.component';


@Injectable()
export class DynamicContentService {
  factoryResolver: any;
  rootViewContainer: any;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }
  addDynamicComponent() {
    const factory = this.factoryResolver
      .resolveComponentFactory(DynamicContentComponent)
    const component = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  }
}

