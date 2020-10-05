import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditData, RedditQuery } from './model';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  constructor(private http: HttpClient) { }

  isLoading = false;


  getSubreddit(query: RedditQuery): Observable<RedditData> {
    const url = `http://www.reddit.com/r/${query.name}.json`

    let params = new HttpParams();
    if (query.limit) params = params.append('limit', query.limit);
    if (query.before) params = params.append('before', query.before);
    if (query.after) params = params.append('after', query.after);
    if (query.count) params = params.append('count', query.count.toString());

    return this.http.get(url, { params: params }) as Observable<RedditData>;
  }

  getCommentsById(permalink: string): Observable<Array<RedditData>> {
    const url = `http://www.reddit.com${permalink.slice(0, -1)}.json`

    return this.http.get(url) as Observable<Array<RedditData>>
  }
}
