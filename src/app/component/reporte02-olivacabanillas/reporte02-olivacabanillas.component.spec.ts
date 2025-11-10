import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reporte02OlivacabanillasComponent } from './reporte02-olivacabanillas.component';

describe('Reporte02OlivacabanillasComponent', () => {
  let component: Reporte02OlivacabanillasComponent;
  let fixture: ComponentFixture<Reporte02OlivacabanillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reporte02OlivacabanillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reporte02OlivacabanillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
