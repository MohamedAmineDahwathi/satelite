import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project08',
  templateUrl: './project08.component.html',
  styleUrls: ['./project08.component.css']
})
export class Project08Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
     LoadViaAjax();
  }

}
