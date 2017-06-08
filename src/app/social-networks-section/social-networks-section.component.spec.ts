import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksSectionComponent } from './social-networks-section.component';

describe('SocialNetworksSectionComponent', () => {
  let component: SocialNetworksSectionComponent;
  let fixture: ComponentFixture<SocialNetworksSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
