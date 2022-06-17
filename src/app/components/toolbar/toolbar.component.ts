import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  query: string = '';
  constructor(private data:DataService) {}

  ngOnInit(): void {
  }

  searchTerm(){
    this.data.searchUser(this.query);
  }

  clearForm(){
    this.data.resetUsers();
    this.query = '';
  }

}
