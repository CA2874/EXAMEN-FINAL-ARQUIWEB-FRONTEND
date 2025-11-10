import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
username: any;

   constructor(private router: Router,
   private loginService: LoginService
   ){}

   logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
 
}