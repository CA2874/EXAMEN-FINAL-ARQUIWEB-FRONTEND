import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOlivacabanillasComponent } from './login-olivacabanillas.component';

describe('LoginOlivacabanillasComponent', () => {
  let component: LoginOlivacabanillasComponent;
  let fixture: ComponentFixture<LoginOlivacabanillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginOlivacabanillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOlivacabanillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
