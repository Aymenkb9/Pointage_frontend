import { AjouterPointageComponent } from './ajouter-pointage/ajouter-pointage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EscalesListComponent } from './escales-list/escales-list.component';
import { PointageDetailsComponent } from './pointage-details/pointage-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ajouter-pointage', component: AjouterPointageComponent },
  { path: 'escales-list', component: EscalesListComponent },
  { path: 'pointage-details', component: PointageDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Redirection par défaut vers le dashboard
];
