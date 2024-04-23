import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escale } from './escale.model';

@Injectable({
  providedIn: 'root'
})
export class EscaleService {
  private baseUrl = 'http://localhost:8087/escales'; // Remplacez l'URL par celle de votre backend

  constructor(private http: HttpClient) { }

  getAllEscales(): Observable<Escale[]> {
    return this.http.get<Escale[]>(`${this.baseUrl}/escales`); // Utilisez une interpolation de chaîne pour inclure l'URL complète
  }
   
  // Ajoutez d'autres méthodes pour créer, mettre à jour et supprimer des escales si nécessaire
}
