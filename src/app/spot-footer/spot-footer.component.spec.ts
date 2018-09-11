import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotFooterComponent } from './spot-footer.component';

describe('SpotFooterComponent', () => {
  let component: SpotFooterComponent;
  let fixture: ComponentFixture<SpotFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
