import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPassordComponent } from './components/forgot-passord/forgot-passord.component';
import { OtpComponent } from './components/otp/otp.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPassordComponent,
    OtpComponent,
    ResetPasswordComponent
  ],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
