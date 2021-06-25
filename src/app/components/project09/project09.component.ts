import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project09',
  templateUrl: './project09.component.html',
  styleUrls: ['./project09.component.css']
})
export class Project09Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
     this.jq.addLoader("a.next-ajax-link-project")
  }

}
