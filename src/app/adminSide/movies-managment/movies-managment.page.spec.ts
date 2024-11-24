import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesManagmentPage } from './movies-managment.page';

describe('MoviesManagmentPage', () => {
  let component: MoviesManagmentPage;
  let fixture: ComponentFixture<MoviesManagmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
