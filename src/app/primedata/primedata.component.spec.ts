import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimedataComponent } from './primedata.component';

describe('PrimedataComponent', () => {
  let component: PrimedataComponent;
  let fixture: ComponentFixture<PrimedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
