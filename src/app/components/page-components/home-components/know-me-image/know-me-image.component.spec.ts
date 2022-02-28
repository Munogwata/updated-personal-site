import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMeImageComponent } from './know-me-image.component';

describe('KnowMeImageComponent', () => {
  let component: KnowMeImageComponent;
  let fixture: ComponentFixture<KnowMeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowMeImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
