import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Output() toggleSidebarForMe: EventEmitter < any >= new EventEmitter();
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;
menuStatus:boolean=false
isMenuOpen!: boolean;
  constructor( private router: Router,private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }
  SideNavToggle() {
    this.toggleSidebarForMe.emit();

  }

  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen
  }

  logoutFunction() {
    this.router.navigate(['/auth/login']);
    localStorage.clear();
    localStorage.removeItem('UserDetails');
    localStorage.removeItem('otpResponse');
  }


}
