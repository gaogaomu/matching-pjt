import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {}
}
