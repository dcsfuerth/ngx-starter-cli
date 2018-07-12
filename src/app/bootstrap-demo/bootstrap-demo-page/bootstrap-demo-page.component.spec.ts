import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepickerModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapDemoPageComponent } from './bootstrap-demo-page.component';

describe('BootstrapDemoPageComponent', () => {
  let component: BootstrapDemoPageComponent;
  let fixture: ComponentFixture<BootstrapDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapDemoPageComponent],
      imports: [NoopAnimationsModule, NgbDatepickerModule.forRoot(), NgbTabsetModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
