import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isSignIn = true;
  loginForm!: FormGroup;
  seePassword = false;
  errors = {
    invalidUser: false,
    emailIncorrect: false,
    passwordShort: false,
    emailRequired: false,
    passwordRequired: false,
    nameRequired: false,
    phoneRequired: false
  };

  constructor(private location: Location, private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.resetForm();
    this.changeForm(true);
  }


  changeForm(type: boolean) {
    this.isSignIn = type;
    if (type) {
      this.loginForm.setValue({
        name: 'None',
        phone: 'None',
        email: '',
        password: ''
      });
    } else {
      this.resetForm();
    }
    this.resetErrors();
  }
  resetForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }
  onSubmit() {
    let value = this.loginForm.value;
    if (this.loginForm.invalid) {
      if (value.email.length == 0) {
        this.errors.emailRequired = true;
      } else {
        this.errors.emailRequired = false;
        const emailRegex = new RegExp('^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})$');
        if (!emailRegex.test(value.email)) {
          this.errors.emailIncorrect = true;
        } else {
          this.errors.emailIncorrect = false;
        }
      }
      if (value.password.length == 0) {
        this.errors.passwordRequired = true;
      } else {
        this.errors.passwordRequired = false;
        if (value.password.length < 6) {
          this.errors.passwordShort = true;
        } else {
          this.errors.passwordShort = false;
        }
      }
      if (!this.isSignIn) {
        console.log(value.phone.length)
        if (value.phone.length == 0) {
          this.errors.phoneRequired = true;
        } else {
          this.errors.phoneRequired = false;
        }
        if (value.name.length == 0) {
          this.errors.nameRequired = true;
        } else {
          this.errors.nameRequired = false;
        }
      }
    } else {
      this.errors.invalidUser = this.userService.signIn(value.email, value.user);
      console.log(this.errors.invalidUser)
      if (!this.errors.invalidUser) {
        this.router.navigate(['/home']);
      }
    }
  }

  resetErrors(): void {
    this.errors.invalidUser = false;
    this.errors.emailIncorrect = false;
    this.errors.passwordShort = false;
    this.errors.emailRequired = false;
    this.errors.passwordRequired = false;
  }
}
