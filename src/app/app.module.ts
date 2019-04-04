import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabModule} from './tabs/tab/tab.module';
import {TabComponent} from './tabs/tab/tab.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabContentComponent} from './tabs/tab-content/tab-content.component';
import {GoogleSearchServiceService} from './tabs/services/google-search-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabModule,
    BrowserAnimationsModule
  ],
  providers: [
    GoogleSearchServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
