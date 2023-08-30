import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { ServerSideTableComponent } from './server-side-table/server-side-table.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    TablesComponent,
    ServerSideTableComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    MatExpansionModule
    
  ]
})
export class TablesModule { }
