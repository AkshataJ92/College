import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacComponent } from './datac.component';

describe('DatacComponent', () => {
  let component: DatacComponent;
  let fixture: ComponentFixture<DatacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
