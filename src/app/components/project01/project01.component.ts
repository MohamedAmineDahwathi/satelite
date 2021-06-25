import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const LoadViaAjax:any;
@Component({
  selector: 'app-project01',
  templateUrl: './project01.component.html',
  styleUrls: ['./project01.component.css']
})
export class Project01Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    
    this.jq.addLoader("a.next-ajax-link-project")
 }

}
