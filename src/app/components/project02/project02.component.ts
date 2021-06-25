import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project02',
  templateUrl: './project02.component.html',
  styleUrls: ['./project02.component.css']
})
export class Project02Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
    this.jq.addLoader("a.next-ajax-link-project")
 }

}
