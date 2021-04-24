import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit(): void {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Login | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'Login To OOUG',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth',
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

  /**
   * * do login using email and password
   * @method doLogin
   * @description method description
   * @param email user email address
   * @param password user password
   * @return boolean true or false
   */
  public doLogin(email: string, password: string): boolean {
    return true;
  }
}
