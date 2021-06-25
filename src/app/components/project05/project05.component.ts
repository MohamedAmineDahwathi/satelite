import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-project05',
  templateUrl: './project05.component.html',
  styleUrls: ['./project05.component.css']
})
export class Project05Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    this.jq.addLoader("a.next-ajax-link-project")
  }

}
