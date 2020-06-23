import { Injectable } from '@angular/core';
import { AuthModule } from './auth.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: AuthModule,
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private resetData = {
    email: '',
    otp: '',
    otpVerified: false,
  };

  public isOtpVerified() {
    return this.resetData.otpVerified;
  }

  public isOtpSent() {
    if (this.resetData.otp === '') {
      return false;
    }
    return true;
  }

  public sendOTP(email: string) {
    return this.http.post((environment.API as string) + '/auth/send-otp', {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
    });
  }

  public setOtpDetails(email: string, otp: string) {
    this.resetData.email = email;
    this.resetData.otp = otp;
  }

  public verifyOtp(otp: string) {
    if (otp.toString() === this.resetData.otp.toString()) {
      this.resetData.otpVerified = true;
      return true;
    }
    return false;
  }

  public resetPassword(newPass: string) {
    return this.http.post(environment.API + '/auth/reset-password', {
      email: this.resetData.email,
      newPassword: newPass,
    });
  }
}
