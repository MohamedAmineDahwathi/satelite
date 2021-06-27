import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const $:any;
@Component({
  selector: 'app-project02',
  templateUrl: './project02.component.html',
  styleUrls: ['./project02.component.css']
})
export class Project02Component implements OnInit {

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
