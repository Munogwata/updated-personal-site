import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyTagsCaptionComponent } from './wavy-tags-caption.component';

describe('WavyTagsCaptionComponent', () => {
  let component: WavyTagsCaptionComponent;
  let fixture: ComponentFixture<WavyTagsCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyTagsCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyTagsCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
