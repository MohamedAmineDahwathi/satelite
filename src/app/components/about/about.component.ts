import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
      this.jq.exJs()
      
  }

}
