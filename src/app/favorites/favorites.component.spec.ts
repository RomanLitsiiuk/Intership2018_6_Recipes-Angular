import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFavoritesComponent } from './favorites.component';

describe('AppFavoritesComponent', () => {
  let component: AppFavoritesComponent;
  let fixture: ComponentFixture<AppFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
