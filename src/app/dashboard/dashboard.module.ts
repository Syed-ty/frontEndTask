import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router } from '@angular/router';
import { RequirementsComponent } from './requirements/requirements.component';
import { NgChartsModule } from 'ng2-charts';
import { SpinnerComponent } from './spinner/spinner.component';
import { CurrencyPipe } from '@angular/common';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    RequirementsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule
  ],
  providers: [CurrencyPipe],
})
export class DashboardModule implements OnInit {
  sideBarOPen: boolean = false
  sideBarOpen: any
  constructor(private router: Router,) { }

  ngOnInit(): void {
    if (screen.width > 768) {
      this.sideBarOpen = true
    } else {
      this.sideBarOpen = false
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  sendValue(event: boolean) {
    this.sideBarOpen = event
  }
}

