import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotNavigationComponent } from './spot-navigation.component';

describe('SpotNavigationComponent', () => {
  let component: SpotNavigationComponent;
  let fixture: ComponentFixture<SpotNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
