import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For MDB Angular Pro
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OfflineComponent } from './components/offline/offline.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BEARER_TOKEN_INTERCEPTOR } from './interceptors/bearer-token-interceptor/bearer-token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    OfflineComponent,
    ErrorsComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production || environment.staging,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BEARER_TOKEN_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export class AppModule {}
