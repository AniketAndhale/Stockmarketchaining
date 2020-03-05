import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrelateddataComponent } from './companyrelateddata.component';

describe('CompanyrelateddataComponent', () => {
  let component: CompanyrelateddataComponent;
  let fixture: ComponentFixture<CompanyrelateddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyrelateddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyrelateddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
