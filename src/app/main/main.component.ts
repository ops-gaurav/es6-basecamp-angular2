import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Hello world to ES6-Basecamp with Angular2, Typescript and Bootstrap'

  constructor() { }

  ngOnInit() {
  }

}
