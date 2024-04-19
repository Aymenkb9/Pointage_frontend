import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalesListComponent } from './escales-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('EscalesListComponent', () => {
  let component: EscalesListComponent;
  let fixture: ComponentFixture<EscalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [EscalesListComponent , SidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
