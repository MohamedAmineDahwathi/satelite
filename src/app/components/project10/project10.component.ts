import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project10',
  templateUrl: './project10.component.html',
  styleUrls: ['./project10.component.css']
})
export class Project10Component implements OnInit {

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
