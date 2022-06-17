import { Component } from '@angular/core';
import {User} from "./models/user";
import {ApiService} from "./services/api/api.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService) { }
  title = 'infinity-search';
  isLoading = false;
  users: User[] = [];
}

