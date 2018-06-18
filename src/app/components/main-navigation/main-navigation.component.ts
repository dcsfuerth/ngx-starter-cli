import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Reset, StoreComponent } from '@dcs/ngx-tools';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'dcs-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavigationComponent extends StoreComponent implements OnInit {
  public isLoggedIn = true;

  constructor(protected store: Store<State>, protected cd: ChangeDetectorRef) {
    super(store, cd);
  }

  ngOnInit() {}

  public login() {
    this.isLoggedIn = true;
    this.cd.markForCheck();
  }

  public logout() {
    this.isLoggedIn = false;
    this.store.dispatch(new Reset());
    this.cd.markForCheck();
  }
}
