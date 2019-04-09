import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {VideosListModel} from '../models/videosList.model';

const baseUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q="
const key = "AIzaSyA670YSi6pImC-35QYETHPxp_rHItuNCvc&fbclid=IwAR30SRFCUNdndqtcSwFmMbC-IaheBZ7mKMu3bCbjuGBJI8q3ju3yv9zA5N0"
const search = "%22%20%20%20%22dogs%22%20%20%20%22&"

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getAllVideosResults(query='dogs'): Observable<VideosListModel> {
    return this.http.get<VideosListModel>(baseUrl + `%22%20%20%20%22${query}%22%20%20%20%22&` + "type=video&key=" + key);
  }
}
