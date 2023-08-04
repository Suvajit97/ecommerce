import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadegetsComponent } from './gadegets.component';

describe('GadegetsComponent', () => {
  let component: GadegetsComponent;
  let fixture: ComponentFixture<GadegetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GadegetsComponent]
    });
    fixture = TestBed.createComponent(GadegetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
