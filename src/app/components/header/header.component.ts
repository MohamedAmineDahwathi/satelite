import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
declare const TimelineLite:any;
declare const Power2:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
    
  }


}
