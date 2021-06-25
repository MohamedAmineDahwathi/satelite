import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';
declare const $:any;
declare const LoadViaAjax:any;
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
    this.jq.addLoader("a.ajax-link")
  }


}
