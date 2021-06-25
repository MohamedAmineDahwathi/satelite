import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-project04',
  templateUrl: './project04.component.html',
  styleUrls: ['./project04.component.css']
})
export class Project04Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    this.jq.addLoader("a.next-ajax-link-project")
  }

}
