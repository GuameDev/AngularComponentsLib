import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/_models/users/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(
    filter = '',
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3
  ): Observable<User[]> {
    const url = environment.apiUrl + 'users';

    const result =  this.http
      .get<User[]>(
        url
        // ,{
        //   params: new HttpParams()
        //     .set('filter', filter)
        //     .set('sortOrder', sortOrder)
        //     .set('pageNumber', pageNumber.toString())
        //     .set('pageSize', pageSize.toString()),
        // }   
      )
      
      return result;
  }
}
