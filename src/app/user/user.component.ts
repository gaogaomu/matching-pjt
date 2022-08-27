import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, toArray } from 'rxjs';
import { user } from '../model/user-detail';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  _userDetail$? = new Observable<user>();

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._userDetail$ = this._userService.getUser(id);
  }
}
