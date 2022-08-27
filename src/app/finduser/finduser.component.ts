import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { users } from '../model/users';
import { FinduserService } from '../service/finduser/finduser.service';
import { HeaderService } from '../service/header/header.service';

@Component({
  selector: 'app-finduser',
  templateUrl: './finduser.component.html',
  styleUrls: ['./finduser.component.scss'],
})
export class FinduserComponent implements OnInit {
  panelOpenState = false;
  // users: users[] = [];
  users$!: Observable<users[]>;

  constructor(
    private _userService: FinduserService,
    private _headerService: HeaderService
  ) {}

  // users: Observable<users[]> = new Observable<users[]>;
  // users: Subject<users[]> = new Subject<users[]>;

  ngOnInit(): void {
    // this._userService.getusers().subscribe((_) => (this.users = _));
    this.users$ = this._userService.getusers();
  }

  ngOnDestroy(): void {}
}
