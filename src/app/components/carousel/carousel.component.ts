import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
declare const Power1:any;
declare const Power2:any;
declare const Power3:any;
declare const TimelineLite:any;
declare const ShowcaseCarousel:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  constructor(private router:Router,
    private jq:JqueryExService) { }

  ngOnInit(): void { 
    this.jq.exJs()
  }

  
  goAfter(ff=null){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl(ff?ff:$(".above").find("a").attr('href'));
     	
   },500);;
  }

}
