import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true })
  loginDto = new loginDto();
  loginForm!: NgForm;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(f:any) {
    console.log(f.value);
    const stored = sessionStorage.getItem('authuser');
    console.log('data :', stored);
    if (!stored) {
      alert('No user registered. Please register first.');
      return;
    }

    const user = JSON.parse(stored);
    if (
      user.Email === f.email &&
      user.Password === f.password
    ) {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}

export class loginDto {
  email?: string;
  password?: string;
}
