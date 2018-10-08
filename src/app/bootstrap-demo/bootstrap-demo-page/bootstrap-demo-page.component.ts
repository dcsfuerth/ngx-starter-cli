import { Component } from '@angular/core';

@Component({
  selector: 'dcs-bootstrap-demo-page',
  templateUrl: './bootstrap-demo-page.component.html',
  styleUrls: ['./bootstrap-demo-page.component.scss'],
})
export class BootstrapDemoPageComponent {
  public loading = false;

  public loadData(): void {
    this.loading = true;
    console.warn('loading', this.loading);

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
