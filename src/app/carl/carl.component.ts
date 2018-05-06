import { Component, OnInit } from '@angular/core';
import { Carl } from '../carl';
import * as $ from 'jquery';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

var moment = require('moment');
var _ = require('lodash');
@Component({
  selector: 'app-carl',
  templateUrl: './carl.component.html',
  styleUrls: ['./carl.component.css']
})
export class CarlComponent implements OnInit {

  carl: Carl = {
    name: 'Carl',
    born: 'May 4, 2018 16:20:00',
    food: 1000,
    age: 0,
    maxFood: 1000,
    clicks: 0,
    uniqueClicks: 0,
    kids: [],
    color: "#9b59b6",
    life: 100
  }

  ips = [];

  foodloss = 5;

  constructor(private http: HttpClient) { 
    this.timerFunction();
  }

  ngOnInit() {
  }
  
  timerFunction() {
    setTimeout(() => {
      this.carl.age = moment(new Date()).diff(moment(new Date(this.carl.born)), 'days');
      this.carl.food = Math.round(this.carl.food - this.foodloss);
      this.carl.life = Math.round((this.carl.food / this.carl.maxFood) * 100);
      this.timerFunction();
    }, 1000);
  }

  getColor()  {
    if (this.carl.life > 50)  {
      return ("#64dd17");
    }
    else  {
      return ("#F71735");
    }
  }

  updateClick() {
    this.carl.clicks += 1;
    if (this.carl.food < this.carl.maxFood)  {
      this.carl.food = Math.round(this.carl.food + ((this.carl.food * .99) / (this.carl.clicks * .08)));
      if (this.carl.maxFood < this.carl.food) {
        this.carl.maxFood = this.carl.food;
      }
    }
    if (this.carl.food > this.carl.maxFood)  {
      this.carl.food = this.carl.maxFood;
    }
    this.foodloss += this.foodloss * 0.009;
    console.log(this.foodloss);
    this.http.get("https://api.ipify.org?format=json").subscribe((res) => this.storeIp(res));
  } 

  storeIp(ip) {
    if (_.indexOf(this.ips, ip.ip) < 0)  {
      this.ips.push(ip.ip);
      this.carl.uniqueClicks += 1;
    }
  }
}
