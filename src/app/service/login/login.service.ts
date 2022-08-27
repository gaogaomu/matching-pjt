import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from 'src/app/model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginsUrl = 'api/loginusers';

  constructor(private http: HttpClient) {}

  getLoginUsers(): Observable<LoginUser[]> {
    return this.http.get<LoginUser[]>(this.loginsUrl);
  }

  chkLoginUser(): Observable<LoginUser[]> {
    return this.http.get<LoginUser[]>(this.loginsUrl);
  }
}
