import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../sidebar/sidebarService'; // Assurez-vous que le chemin est correct
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MatCardModule} from "@angular/material/card"
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator"
import { EscaleService } from './escale.service';
import { Escale } from './escale.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-escales-list',
  standalone: true,
  imports: [CommonModule ,SidebarComponent ,   MatCardModule , MatPaginatorModule , 
    HttpClientModule , HttpClient ],
  templateUrl: './escales-list.component.html',
  styleUrls: ['./escales-list.component.css'],
})
export class EscalesListComponent{

  @ViewChild(MatPaginator) paginatior !: MatPaginator;

  escales: Escale[] = [];

  constructor(private escaleService: EscaleService) { }

  ngOnInit(): void {
    this.getEscales();
  }

  getEscales(): void {
    this.escaleService.getAllEscales()
      .subscribe(escales => this.escales = escales);
  }


 
 
}
