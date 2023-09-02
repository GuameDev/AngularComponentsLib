import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { ServerSideTableComponent } from './server-side-table/server-side-table.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/_services/user-service/user.service';
import { User } from 'src/app/_models/users/user.model';


import {MatInputModule} from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    TablesComponent,
    ServerSideTableComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule
    
  ]
})
export class TablesModule  {
  



 }
