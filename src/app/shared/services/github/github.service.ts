import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Repo } from '../../models/repo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserInfo(user: string): Observable<User> {
    const url = `https://api.github.com/users/${user}`;
    return this.http.get<User>(url);
  }

  getUserRepos(url: string, page: number): Observable<Repo[]> {
    return this.http.get<Repo[]>(url + `?page=${page}&per_page=4`);
  }
}
