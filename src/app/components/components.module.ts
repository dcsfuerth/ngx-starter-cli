import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MainNavigationComponent, LoadingIndicatorComponent],
  exports: [MainNavigationComponent, LoadingIndicatorComponent],
})
export class ComponentsModule {}
