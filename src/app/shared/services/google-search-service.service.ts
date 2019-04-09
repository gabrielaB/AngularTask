import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ImagesListModel} from '../models/imagesList.model';
import {Observable} from 'rxjs';

const baseUrl = 'https://www.googleapis.com/customsearch/v1?';
const apiKey = 'AIzaSyAW8kXc_Uj0lnJZgXbXjNnS_aR5xkkFrAk';
const  engineId = '007265588647443799769:evxil8xidxw';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {

  constructor(private http: HttpClient)  {
  }

  getAllImagesResults(query = 'dog'): Observable<ImagesListModel> {
    return this.http.get<ImagesListModel>(baseUrl + 'key=' + apiKey + '&cx=' + engineId + '&q=' + query);
  }
}
