import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

declare const LoadViaAjax:any;
@Component({
  selector: 'app-project03',
  templateUrl: './project03.component.html',
  styleUrls: ['./project03.component.css']
})
export class Project03Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    this.jq.exJs()
  }

}
