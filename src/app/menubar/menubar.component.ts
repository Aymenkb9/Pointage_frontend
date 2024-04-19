import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServerModule } from '@angular/platform-server';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MatSidenavModule , MatIconModule , 
    MatDividerModule ,  MatListModule , MatToolbarModule , RouterOutlet , MatMenuModule, MatBadgeModule , 
  RouterLink , RouterLinkActive , CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent  {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true; }


  
  


}
