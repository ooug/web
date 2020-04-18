import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  /**
   * * do login using email and password
   * @method doLogin
   * @description method description
   * @param email user email address
   * @param password user password
   * @return boolean true or false
   */
  public doLogin(email: string, password: string): boolean {
    console.log('email :', email);
    console.log('password :', password);
    const status = confirm('Want to login ?');
    console.log(`status :`, status);
    return status;
  }
}
