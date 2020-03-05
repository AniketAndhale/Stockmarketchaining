import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatabaseComponent } from './userdatabase.component';

describe('UserdatabaseComponent', () => {
  let component: UserdatabaseComponent;
  let fixture: ComponentFixture<UserdatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
