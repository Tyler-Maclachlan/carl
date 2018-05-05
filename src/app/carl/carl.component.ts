import { Component, OnInit } from '@angular/core';
import { Carl } from '../carl';

@Component({
  selector: 'app-carl',
  templateUrl: './carl.component.html',
  styleUrls: ['./carl.component.css']
})
export class CarlComponent implements OnInit {

  carl: Carl = {
    name: 'Carl',
    age: 0,
    timeToDeath: 432000000,
    clicks: 0,
    uniqueClicks: 0,
    kids: [],
    color: "#9b59b6"
  }

  constructor() { }

  ngOnInit() {
  }

}
