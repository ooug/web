import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private resetData = {
    email: '',
    otp: '',
    otpVerified: false,
  };

  // login function downwards
  public setLoginUser(token: string, user: { name: string; email: string }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      resolve('done');
    });
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  // reset password functions downward
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
