import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediosPage } from './predios-page';

describe('PrediosPage', () => {
  let component: PrediosPage;
  let fixture: ComponentFixture<PrediosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrediosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrediosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
