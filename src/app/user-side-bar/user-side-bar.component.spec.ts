import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideBarComponent } from './user-side-bar.component';

describe('UserSideBarComponent', () => {
  let component: UserSideBarComponent;
  let fixture: ComponentFixture<UserSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSideBarComponent]
    });
    fixture = TestBed.createComponent(UserSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
