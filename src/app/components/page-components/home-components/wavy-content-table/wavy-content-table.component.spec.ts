import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyContentTableComponent } from './wavy-content-table.component';

describe('WavyContentTableComponent', () => {
  let component: WavyContentTableComponent;
  let fixture: ComponentFixture<WavyContentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyContentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
