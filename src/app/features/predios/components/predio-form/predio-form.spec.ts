import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredioForm } from './predio-form';

describe('PredioForm', () => {
  let component: PredioForm;
  let fixture: ComponentFixture<PredioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredioForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredioForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
