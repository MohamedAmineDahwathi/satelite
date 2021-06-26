import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const $:any;
@Component({
  selector: 'app-large-carousel',
  templateUrl: './large-carousel.component.html',
  styleUrls: ['./large-carousel.component.css']
})
export class LargeCarouselComponent implements OnInit {

  constructor(private router:Router,
    private jq:JqueryExService) { }

  ngOnInit(): void {
    this.jq.exJs()
  }

  
  goAfter(){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl($(".above").find("a").attr('href'));
     	
    },1000);
  }

}
