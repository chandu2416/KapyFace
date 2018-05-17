import {FarmerApplicationComponent  } from './farmer-application/farmer-application.component';
import {NurseryComponent} from "./nursery/nursery.component";
import {LoginComponent} from "./login/login.component";
import {TreasuryComponent} from "./treasury/treasury.component";

import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './guards/auth-guard';

const routes: Routes = [
  { path: 'farmerApplication', component: FarmerApplicationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'approveNursery', component: NurseryComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login',pathMatch:'full'},
  { path: '**', pathMatch:'full', redirectTo: '/login'}
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
