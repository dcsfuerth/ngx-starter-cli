import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ErrorBoxComponent } from './error-box.component';

describe('ErrorBoxComponent', () => {
  let comp: ErrorBoxComponent;
  let fixture: ComponentFixture<ErrorBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorBoxComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ErrorBoxComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('title defaults to: Error', () => {
    expect(comp.title).toEqual('Error');
  });
});
