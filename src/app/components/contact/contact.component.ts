import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private jq:JqueryExService,private router:Router
  ) { }

  ngOnInit(): void {
    setTimeout(function(){
      LoadViaAjax();			

    },800);
  }
  
  goAfter(ff){
    let that=this
    setTimeout(function(){
      that.router.navigateByUrl(ff);
   },500);
  }

}
