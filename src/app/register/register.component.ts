import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('UserForm', { static: true })
  UserForm!: NgForm;
  Userdto = new userDto();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  replacerFunc = () => {
    const visited = new WeakSet();
    return (_key: any, value: object | null) => {
      if (typeof value === 'object' && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };

  register(data: any) {
    console.log('data', data.value);
    if (data.valid) {
      sessionStorage.setItem('authuser', JSON.stringify(data.value, this.replacerFunc()));
      alert('user registered.');
      this.router.navigate(['/login']);
      this.UserForm.resetForm();
    } else {
      console.log('not register');
    }
  }

  reset(UserForm: NgForm) {
    UserForm.resetForm();
  }
}

export class userDto {
  FirstName?: string;
  LastName?: string;
  Email?: string;
  Password?: string;
}
