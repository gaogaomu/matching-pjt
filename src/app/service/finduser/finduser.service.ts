import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from 'src/app/model/users';

@Injectable({
  providedIn: 'root',
})
export class FinduserService {
  apiUrl = 'api/activeusers';
  constructor(private http: HttpClient) {}

  getusers(): Observable<users[]> {
    return this.http.get<users[]>(this.apiUrl);
  }
}
