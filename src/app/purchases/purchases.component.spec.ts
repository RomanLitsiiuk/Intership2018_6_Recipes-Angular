import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPurchasesComponent } from './purchases.component';

describe('AppPurchasesComponent', () => {
  let component: AppPurchasesComponent;
  let fixture: ComponentFixture<AppPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
