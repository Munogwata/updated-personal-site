import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreContentComponent } from './score-content.component';

describe('ScoreContentComponent', () => {
  let component: ScoreContentComponent;
  let fixture: ComponentFixture<ScoreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
