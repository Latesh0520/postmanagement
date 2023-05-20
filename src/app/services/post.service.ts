import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'https://postmanagement-b4e84-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) { }

  getpost(): Observable<any>{
    return this.http.get('https://postmanagement-b4e84-default-rtdb.firebaseio.com/post.json');
  }
}
