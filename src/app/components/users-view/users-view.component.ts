import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {User} from "../../models/user";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {tap} from "rxjs/operators";

@UntilDestroy()
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent implements OnInit {
  constructor(private data: DataService) { }
  isLoading: boolean = false;
  isNoResults: boolean = false;
  users: User[] = [];

  ngOnInit(): void {
    this.initSubs();
  }

  initSubs(){
    this.data.loading$.pipe(
      untilDestroyed(this),
      tap(loading => this.isLoading = loading)
    ).subscribe();
    this.data.users$.pipe(
      untilDestroyed(this),
      tap(users => this.users = users)
    ).subscribe();
    this.data.isNoResults$.pipe(
      untilDestroyed(this),
      tap(res => this.isNoResults = res)
    ).subscribe();
  }

}
