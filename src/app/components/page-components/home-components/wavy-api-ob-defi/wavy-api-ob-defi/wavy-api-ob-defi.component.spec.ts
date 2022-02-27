import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyApiObDefiComponent } from './wavy-api-ob-defi.component';

describe('WavyApiObDefiComponent', () => {
  let component: WavyApiObDefiComponent;
  let fixture: ComponentFixture<WavyApiObDefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavyApiObDefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyApiObDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
