import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-ajouter-pointage',
  standalone: true,
  imports: [],
  templateUrl: './ajouter-pointage.component.html',
  styleUrl: './ajouter-pointage.component.css'
})
export class AjouterPointageComponent {

  constructor(private route: ActivatedRoute) {
  }
}