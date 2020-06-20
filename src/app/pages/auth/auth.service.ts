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
  };

  public sendOTP(email: string) {
    return this.http.post((environment.API as string) + '/auth/send-otp', {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
    });
  }

  public setOtpDetails(email: string, otp: string) {
    this.resetData.email = email;
    this.resetData.otp = otp;
    console.log(this.resetData);
  }

  public verifyOtp(otp: string) {
    if (otp.toString() === this.resetData.otp.toString()) {
      return true;
    }
    return false;
  }
}
