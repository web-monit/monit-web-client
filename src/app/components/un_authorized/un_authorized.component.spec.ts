/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Un_authorizedComponent } from './un_authorized.component';

describe('Un_authorizedComponent', () => {
  let component: Un_authorizedComponent;
  let fixture: ComponentFixture<Un_authorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Un_authorizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Un_authorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
