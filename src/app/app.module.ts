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
import {YoutubeService} from './shared/services/youtube-service.service';
import {SearchComponent} from './search/search.component';
import {DynamicContentComponent} from './dynamic/dynamic-content/dynamic-content.component';
import {DynamicContentService} from './shared/services/dynamic-content-service.service';
import {ContentContainerComponent} from './dynamic/dynamic-container/content-container.component';
import {DynamicItemComponent} from './dynamic-item/dynamic-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageItemComponent,
    ImageListComponent,
    ImagesComponent,
    VideoListComponent,
    VideosComponent,
    VideoItemComponent,
    SearchComponent,
    DynamicContentComponent,
    ContentContainerComponent,
    DynamicItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    GoogleSearchService,
    YoutubeService,
    DynamicContentService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DynamicContentComponent]
})
export class AppModule { }
