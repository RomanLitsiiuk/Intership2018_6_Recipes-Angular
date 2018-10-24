import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipesComponent } from './recipes.component';

describe('AppRecipesComponent', () => {
  let component: AppRecipesComponent;
  let fixture: ComponentFixture<AppRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
