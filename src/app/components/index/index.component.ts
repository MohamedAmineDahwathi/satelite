import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private jq:JqueryExService,private router:Router) { }

  ngOnInit(): void {
    this.jq.exJs()
  }
  goAfter(ff){
    let that=this
    setTimeout(function(){
      that.router.navigateByUrl(ff);
   },500);
  }
}
