import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const LoadViaAjax:any;
@Component({
  selector: 'app-project01',
  templateUrl: './project01.component.html',
  styleUrls: ['./project01.component.css']
})
export class Project01Component implements OnInit {

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
    },200);
}
}
