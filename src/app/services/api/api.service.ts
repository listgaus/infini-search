import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {API_ADDRESS} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

   getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(API_ADDRESS);
  }
}
