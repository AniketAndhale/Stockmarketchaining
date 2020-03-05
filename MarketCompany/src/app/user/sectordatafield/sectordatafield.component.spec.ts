import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectordatafieldComponent } from './sectordatafield.component';

describe('SectordatafieldComponent', () => {
  let component: SectordatafieldComponent;
  let fixture: ComponentFixture<SectordatafieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectordatafieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectordatafieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
