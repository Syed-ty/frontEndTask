import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [  {path:'',redirectTo:'screen1',pathMatch:'full'},
{ path: '', component: DashboardComponent, children: [
  {path:'screen1',component:RequirementsComponent},
  {path:'screen2',component:SidenavComponent},
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
