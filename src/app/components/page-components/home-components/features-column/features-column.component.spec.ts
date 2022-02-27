import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesColumnComponent } from './features-column.component';

describe('FeaturesColumnComponent', () => {
  let component: FeaturesColumnComponent;
  let fixture: ComponentFixture<FeaturesColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
