import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  public usernameClass = ['input-div']; // classes used for username field
  public passwordClass = ['input-div']; // classes used for password field

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // when focused on input fields
  focus(input: string) {
    if (input === 'password') {
      this.passwordClass.push('focus');
    }
    if (input === 'username') {
      this.usernameClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'password') {
      if (this.loginForm.value.password === '') {
        this.passwordClass.pop();
      }
    }
    if (input === 'username') {
      if (this.loginForm.value.email === '') {
        this.usernameClass.pop();
      }
    }
  }

  // login
  public login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.http
      .post((environment.API as string) + '/auth/login', {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe((data: any) => {
        if (data.status === false) {
          alert(data.data);
        } else {
          this.authService
            .setLoginUser(data.token, {
              name: data.User.name,
              email: data.User.email,
            })
            .then(() => {
              alert('Logged in');
            });
        }
      });
  }

  updateMetaTags() {
    this.titleService.setTitle('Login | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'Login To OOUG',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth/login',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Login | OOUG',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Login To OOUG',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }
}
