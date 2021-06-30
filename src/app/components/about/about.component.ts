import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;

declare const TweenLite:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private jq:JqueryExService,private router:Router
  ) { }

  ngOnInit(): void {
      this.jq.exJs()

  }
  goAfter(ff){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl(ff);
     	
   },500);;
  }

}
