import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackColumnComponent } from './stack-column.component';

describe('StackColumnComponent', () => {
  let component: StackColumnComponent;
  let fixture: ComponentFixture<StackColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
