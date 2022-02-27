import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyProjectCardsComponent } from './wavy-project-cards.component';

describe('WavyProjectCardsComponent', () => {
  let component: WavyProjectCardsComponent;
  let fixture: ComponentFixture<WavyProjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyProjectCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
