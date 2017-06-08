import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMobileComponent } from './feature-mobile.component';

describe('FeatureMobileComponent', () => {
  let component: FeatureMobileComponent;
  let fixture: ComponentFixture<FeatureMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
