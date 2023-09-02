import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { tap } from 'rxjs';
import { User } from 'src/app/_models/users/user.model';
import { UserService } from 'src/app/_services/user-service/user.service';
import { UserDataSource } from '../datasources/UserDataSource';
import { merge } from 'rxjs';
import { Column } from 'src/app/_models/tables/column.model';

@Component({
  selector: 'app-server-side-table',
  templateUrl: './server-side-table.component.html',
  styleUrls: ['./server-side-table.component.scss'],
})
export class ServerSideTableComponent implements AfterViewInit, OnInit {
  dataSource: UserDataSource;
  columns: Column[] =[
    {
      id:"id",
      name:"Id",
      queryParam:"userId",
      filterInputValue:"",
      order:"asc",   
     },
     {
      id:"userName",
      name:"UserName",
      queryParam:"userName",
      filterInputValue:"",
      order:"asc",   
     },
     {
      id:"email",
      name:"Email",
      queryParam:"email",
      filterInputValue:"",
      order:"asc",   
     }
  ]

  displayedColumns = this.columns.map(column => column.id);

  @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(private userService: UserService) {
    this.dataSource = new UserDataSource(this.userService);
  }

  ngOnInit() {
    this.dataSource.loadUsers('', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadUsersPage()))
      .subscribe();
  }
  loadUsersPage() {
    this.dataSource.loadUsers(
      '',
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
