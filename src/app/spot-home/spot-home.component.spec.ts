import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotHomeComponent } from './spot-home.component';

describe('SpotHomeComponent', () => {
  let component: SpotHomeComponent;
  let fixture: ComponentFixture<SpotHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
