import { Component, OnInit } from '@angular/core';
import { JqueryExService } from 'src/app/helpers/jquery-ex.service';

@Component({
  selector: 'app-project07',
  templateUrl: './project07.component.html',
  styleUrls: ['./project07.component.css']
})
export class Project07Component implements OnInit {

  constructor(
    private jq:JqueryExService
  ) { }

  ngOnInit(): void {
    this.jq.addLoader("a.next-ajax-link-project")
  }

}
