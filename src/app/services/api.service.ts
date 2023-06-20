import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Posts } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public allNotifications: Posts[] = [];
  private readonly baseURL: string = 'https://jsonplaceholder.typicode.com';
  public panelClose = new Subject<boolean>()

  constructor(private readonly http: HttpClient) { }

  /**
   * @returns It Hit the json placeholderapi and get the
   * data and return the Posts as a observable.
   */
  getNotifications(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseURL + '/posts').pipe(
      map((response: any) => {
        response = response.map((post: Posts) => {
          if (post.id < 6) {
            post['read'] = false;
          } else {
            post['read'] = true;
          }
          return post;
        });
        return response;
      }));
  }

}
