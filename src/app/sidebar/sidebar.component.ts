import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebarService'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Pas besoin de Output et EventEmitter maintenant

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar(); // Utilisez le service pour changer l'état
  }
  sidebarWidth = 0; // Initial sidebar width
  
  openNav() {
    this.sidebarWidth = 250; // Set the sidebar width to 250px
  }

  closeNav() {
    this.sidebarWidth = 0; // Set the sidebar width to 0
  }
}
