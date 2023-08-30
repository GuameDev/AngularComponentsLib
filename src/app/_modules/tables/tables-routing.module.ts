import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';
import { ServerSideTableComponent } from './server-side-table/server-side-table.component';

const routes: Routes = [
  {
    path: '', component: TablesComponent, 
    children: [
      { path: 'server-side', component: ServerSideTableComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
