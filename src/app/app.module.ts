import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoogleSearchService} from './shared/services/google-search-service.service';
import {HeaderComponent} from './header/header.component';
import {ImageItemComponent} from './images/image-item/image-item.component';
import {ImageListComponent} from './images/image-list/image-list.component';
import {ImagesComponent} from './images/images/images.component';
import {VideoListComponent} from './videos/video-list/video-list.component';
import {VideosComponent} from './videos/videos/videos.component';
import {VideoItemComponent} from './videos/video-item/video-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageItemComponent,
    ImageListComponent,
    ImagesComponent,
    VideoListComponent,
    VideosComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    GoogleSearchService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
