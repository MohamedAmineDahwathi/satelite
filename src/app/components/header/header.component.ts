import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
declare const TweenMax:any;
declare const Power0:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private jq:JqueryExService,private router:Router
  ) { }

  ngOnInit(): void {
    
    
  }


  goAfter(ff){
    let that=this
    setTimeout(function(){
      that.router.navigateByUrl(ff);
   },500);
  }

}
