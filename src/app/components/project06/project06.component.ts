import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project06',
  templateUrl: './project06.component.html',
  styleUrls: ['./project06.component.css']
})
export class Project06Component implements OnInit {

  constructor(
    private jq:JqueryExService,private router:Router
  ) { }

  ngOnInit(): void {
    
    setTimeout(function(){
      LoadViaAjax();			

    },400);
  }

  
  goAfter(ff){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl(ff);
      },800);
  }
}
