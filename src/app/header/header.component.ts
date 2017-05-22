import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active = "home";

  constructor() { }

  ngOnInit() {
  }

  /**
   * change the navigation
   */
  changeNavbarOption = function (to: string): string {
    this.active = to;
    return this.active;
  }

}
