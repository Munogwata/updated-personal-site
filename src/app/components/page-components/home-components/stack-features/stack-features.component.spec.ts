import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackFeaturesComponent } from './stack-features.component';

describe('StackFeaturesComponent', () => {
  let component: StackFeaturesComponent;
  let fixture: ComponentFixture<StackFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
