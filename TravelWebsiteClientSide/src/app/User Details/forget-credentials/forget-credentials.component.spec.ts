import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetCredentialsComponent } from './forget-credentials.component';

describe('ForgetCredentialsComponent', () => {
  let component: ForgetCredentialsComponent;
  let fixture: ComponentFixture<ForgetCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
