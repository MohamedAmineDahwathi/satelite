import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project04',
  templateUrl: './project04.component.html',
  styleUrls: ['./project04.component.css']
})
export class Project04Component implements OnInit {

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
      },800);
  }
}
