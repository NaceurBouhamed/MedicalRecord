import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
const Instascan = require('instascan');


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRecord() {
    console.log('clicked');
    this.router.navigate(['/record']);
  }

}
