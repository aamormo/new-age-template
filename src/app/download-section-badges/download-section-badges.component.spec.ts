import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSectionBadgesComponent } from './download-section-badges.component';

describe('DownloadSectionBadgesComponent', () => {
  let component: DownloadSectionBadgesComponent;
  let fixture: ComponentFixture<DownloadSectionBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSectionBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSectionBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
