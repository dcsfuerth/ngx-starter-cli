import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'dcs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    console.log(`Loaded Angular ${VERSION.full} in ${performance.now().toFixed(2)} ms!!`);
  }
}
