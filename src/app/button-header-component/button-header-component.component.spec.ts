import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHeaderComponentComponent } from './button-header-component.component';

describe('ButtonHeaderComponentComponent', () => {
  let component: ButtonHeaderComponentComponent;
  let fixture: ComponentFixture<ButtonHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
