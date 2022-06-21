import { Injectable } from '@angular/core';
import { ApiService } from "../api/api.service";
import { User } from "../../models/user";
import { Subject } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loading$: Subject<boolean> = new Subject();
  isNoResults$: Subject<boolean> = new Subject();
  users$: Subject<User[]> = new Subject();


  constructor(private api: ApiService) { }

  searchUser(query: any){
    this.isNoResults$.next(false);
    if(query === ''){
      this.users$.next([]);
      return;
    }
    this.loading$.next(true);
    this.users$.next([]);
    this.api.getUsers().pipe(
      map( users => users.filter( user => this.validateQuery(user,query))),
      tap((users: User[]) => {
        users.length === 0 ? this.isNoResults$.next(true) : null,
        this.users$.next(users),
        this.loading$.next(false)
      })
    ).subscribe();
  }

    resetUsers(){
      this.isNoResults$.next(false);
      this.loading$.next(false);
      this.users$.next([])
    }

    validateQuery(user: User, query: string): boolean{
      let stringifiedUser = JSON.stringify(user).toLocaleLowerCase();
      if(stringifiedUser.match(query.toLocaleLowerCase()) !== null) {
        return true;
      }else {
        return false;
      }

    }
}
