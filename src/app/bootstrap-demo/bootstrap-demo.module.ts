import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapDemoPageComponent } from './bootstrap-demo-page/bootstrap-demo-page.component';
import { BootstrapDemoRoutingModule } from './bootstrap-demo-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    BootstrapDemoRoutingModule,
    NgbDatepickerModule,
    NgbTabsetModule,
    ComponentsModule,
  ],
  declarations: [BootstrapDemoPageComponent],
})
export class BootstrapDemoModule {}
