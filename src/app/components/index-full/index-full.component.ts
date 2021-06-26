import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-index-full',
  templateUrl: './index-full.component.html',
  styleUrls: ['./index-full.component.css']
})
export class IndexFullComponent implements OnInit {

  constructor(
    private jq:JqueryExService) { }

  ngOnInit(): void {
    this.jq.exJs()
  }

}
