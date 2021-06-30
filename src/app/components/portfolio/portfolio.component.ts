import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
declare const LoadViaAjax:any;
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
    setTimeout(function(){
      LoadViaAjax();			

    },800);
  }

  goAfter(ff=null){
    let that=this;
     setTimeout(function(){
      that.router.navigateByUrl(ff?ff:$(".above").find("a").attr('href'));
     	
   },500);;
  }


}
