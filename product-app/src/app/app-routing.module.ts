import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ProfileClientService } from './modules/profile-manager/profile-client.service';
import { ProfileManagerComponent } from './modules/profile-manager/profile-manager.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: ProfileManagerComponent, canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to landingPage
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
