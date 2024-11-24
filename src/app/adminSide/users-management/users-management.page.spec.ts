import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersManagementPage } from './users-management.page';

describe('UsersManagementPage', () => {
  let component: UsersManagementPage;
  let fixture: ComponentFixture<UsersManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
