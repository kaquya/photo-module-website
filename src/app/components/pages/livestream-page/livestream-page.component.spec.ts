import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestreamPageComponent } from './livestream-page.component';

describe('LivestreamPageComponent', () => {
  let component: LivestreamPageComponent;
  let fixture: ComponentFixture<LivestreamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestreamPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
