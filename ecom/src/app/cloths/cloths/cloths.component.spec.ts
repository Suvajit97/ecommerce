import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothsComponent } from './cloths.component';

describe('ClothsComponent', () => {
  let component: ClothsComponent;
  let fixture: ComponentFixture<ClothsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothsComponent]
    });
    fixture = TestBed.createComponent(ClothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
