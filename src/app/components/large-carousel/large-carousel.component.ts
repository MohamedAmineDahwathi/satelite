import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $:any;
@Component({
  selector: 'app-large-carousel',
  templateUrl: './large-carousel.component.html',
  styleUrls: ['./large-carousel.component.css']
})
export class LargeCarouselComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  goAfter(){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl($(".above").find("a").attr('href'));
     	
    },1000);
  }

}
