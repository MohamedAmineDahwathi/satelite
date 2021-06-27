import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
      this.jq.exJs()
      $(".text-carousel").ready(function(){
        $(".text-carousel").owlCarousel({	
          loop:true,
          dots:false,
          items:1,
          autoplay:false,
          smartSpeed: 750,
          autoHeight:true,
          autoplayHoverPause:true,
          nav:true,
          navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
        });
      })
  }

}
