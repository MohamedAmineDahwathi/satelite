import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private jq:JqueryExService,
    private router:Router
  ) { }

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
