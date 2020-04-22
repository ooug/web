import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OfflineComponent } from './components/offline/offline.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./pages/activities/activities.module').then(
        (m) => m.ActivitiesModule
      ),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./pages/members/members.module').then((m) => m.MembersModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'errors',
    component: ErrorsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
