import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuteImageBlockComponent } from './astute-image-block.component';

describe('AstuteImageBlockComponent', () => {
  let component: AstuteImageBlockComponent;
  let fixture: ComponentFixture<AstuteImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuteImageBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstuteImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
