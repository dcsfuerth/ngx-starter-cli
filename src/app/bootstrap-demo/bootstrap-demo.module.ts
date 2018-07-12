import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapDemoPageComponent } from './bootstrap-demo-page/bootstrap-demo-page.component';
import { BootstrapDemoRoutingModule } from './bootstrap-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapDemoRoutingModule,
    NgbDatepickerModule.forRoot(),
    NgbTabsetModule.forRoot(),
  ],
  declarations: [BootstrapDemoPageComponent],
})
export class BootstrapDemoModule {}
