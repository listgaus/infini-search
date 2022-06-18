import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  searchForm: FormGroup | undefined;
  query: string = '';
  constructor(private data:DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: [null, [Validators.minLength(2), Validators.required]]
    })
  }

  searchFormQuery(){
    this.data.searchUser(this.searchForm?.controls['query'].value);
  }

  clearFormQuery(){
    this.data.resetUsers();
    this.searchForm?.reset()
  }
}
