import {Component, Inject, Input, ViewContainerRef} from '@angular/core';
import {ImageModel} from '../../shared/models/image.model';

@Component({
  selector: 'app-dynamic-content',
  template: `<h2>I'm dynamically attached</h2>`
})
export class DynamicContentComponent {
  @Input() images: ImageModel[];
}
