import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reporte01OlivacabanillasComponent } from './reporte01-olivacabanillas.component';

describe('Reporte01OlivacabanillasComponent', () => {
  let component: Reporte01OlivacabanillasComponent;
  let fixture: ComponentFixture<Reporte01OlivacabanillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reporte01OlivacabanillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reporte01OlivacabanillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
