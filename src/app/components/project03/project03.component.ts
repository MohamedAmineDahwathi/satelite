import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const $:any;
declare const LoadViaAjax:any;
@Component({
  selector: 'app-project03',
  templateUrl: './project03.component.html',
  styleUrls: ['./project03.component.css']
})
export class Project03Component implements OnInit {

  constructor(
    private jq:JqueryExService,private router:Router
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
  goAfter(ff){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl(ff);
      },200);
  }

}
