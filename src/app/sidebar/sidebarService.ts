import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpen = new BehaviorSubject<boolean>(false); // Ou false, selon l'état initial souhaité
  isOpen$ = this.isOpen.asObservable();

  toggleSidebar() {
    this.isOpen.next(!this.isOpen.value);
  }
}
