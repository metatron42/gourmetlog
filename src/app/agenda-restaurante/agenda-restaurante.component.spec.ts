import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRestauranteComponent } from './agenda-restaurante.component';

describe('AgendaRestauranteComponent', () => {
  let component: AgendaRestauranteComponent;
  let fixture: ComponentFixture<AgendaRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaRestauranteComponent]
    });
    fixture = TestBed.createComponent(AgendaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
