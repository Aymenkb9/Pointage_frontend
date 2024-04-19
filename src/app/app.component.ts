import { Component, NgModule, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AjouterPointageComponent } from './ajouter-pointage/ajouter-pointage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EscalesListComponent } from './escales-list/escales-list.component';
import { PointageDetailsComponent } from './pointage-details/pointage-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AjouterEscalesComponent } from './ajouter-escales/ajouter-escales.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarComponent } from './menubar/menubar.component';
import { BreadcrumbModule } from 'angular-crumbs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AjouterPointageComponent , DashboardComponent , 
  EscalesListComponent , PointageDetailsComponent , MatSidenavModule , MatIconModule , 
  MatDividerModule ,  MatListModule , MatToolbarModule , CommonModule , AjouterEscalesComponent ,
   LoginComponent , HttpClientModule , MenubarComponent 
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'pointage_frontend';
}