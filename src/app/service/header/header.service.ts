import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  _iconVisible: boolean = false;

  _toggleMenuPushedflag: boolean = true;
  _onToggleFlagChange$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  getIconVisible(): boolean {
    return this._iconVisible;
  }

  setIconVisible(flag: boolean): void {
    this._iconVisible = flag;
  }

  toggleMenu() {
    this._toggleMenuPushedflag = !this._toggleMenuPushedflag;
    this._onToggleFlagChange$.next(this._toggleMenuPushedflag);
  }
}
