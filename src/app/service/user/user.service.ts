import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, take, tap } from 'rxjs';
import { user } from 'src/app/model/user-detail';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<user> {
    const url = `api/users?id=${id}`;
    return this.http.get<user[]>(url).pipe(
      map((_) => _[0]),
      tap((_) => console.log(_.id))
    );
  }
}
