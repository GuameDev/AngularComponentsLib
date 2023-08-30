import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';

const tablesModule = () => import('./_modules/tables/tables.module').then(m => m.TablesModule);
const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'  },
  { path: 'home', component:HomeComponent  },
  { path: 'tables', loadChildren: tablesModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
