import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TabModule} from './tabs/tab/tab.module';
import {TabComponent} from './tabs/tab/tab.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabContentComponent} from './tabs/tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContentComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    TabModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
