import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project06',
  templateUrl: './project06.component.html',
  styleUrls: ['./project06.component.css']
})
export class Project06Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
     LoadViaAjax();
  }

}
