import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { House } from '../../models/houses.model';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-houses-list',
  styleUrls: ['./houses-list.component.scss'],
  templateUrl: './houses-list.component.html',
})
export class HousesListComponent {
  public houseList$: Observable<House[]>;
  private storeSubscription: Subscription;

  constructor(private housesService: HousesService) {
    this.houseList$ = housesService.housesList$;
  }

  onScrollingFinished() {
    this.housesService.loadMore();
  }
}