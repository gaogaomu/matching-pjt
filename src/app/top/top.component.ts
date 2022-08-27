import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { HeaderService } from '../service/header/header.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  protected _unsubscribe$: Subject<void> = new Subject();
  IsVisiblesidnavFlag: boolean = true;

  constructor(private _headerService: HeaderService) {}

  ngOnInit(): void {
    this._headerService._onToggleFlagChange$
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((_) => (this.IsVisiblesidnavFlag = _));

    this._headerService._iconVisible = true;
  }

  // closeNav() {
  //   this.IsVisiblesidnavFlag = false;
  //   this._headerService._toggleMenuPushedflag = false;
  // }

  ngOnDestoroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
