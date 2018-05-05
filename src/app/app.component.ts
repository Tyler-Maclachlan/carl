import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit()  {
    $('#welcome1').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", () => {
      $('#welcome2').addClass('welcome-animate');
    });

    $('#welcome2').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", () => {
      $('#welcome').animate({
        opacity: 0
      }, {
        duration: 1000,
        complete: ()  =>  {
          $('#welcome').remove();
        }
      })
    })
  }
}
