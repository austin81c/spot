import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotResultsListComponent } from './spot-results-list.component';

describe('SpotResultsListComponent', () => {
  let component: SpotResultsListComponent;
  let fixture: ComponentFixture<SpotResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotResultsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
