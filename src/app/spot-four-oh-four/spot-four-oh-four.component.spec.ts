import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotFourOhFourComponent } from './spot-four-oh-four.component';

describe('SpotFourOhFourComponent', () => {
  let component: SpotFourOhFourComponent;
  let fixture: ComponentFixture<SpotFourOhFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotFourOhFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotFourOhFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
