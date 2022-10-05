import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesPageGuard } from '../share/resources.guard';
import { HousesDetailComponent } from './components/houses-detail/houses-detail.component';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';
import { HouseResolver } from './services/house-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HousesPageComponent,
    canActivate: [ResourcesPageGuard],
    children: [
      {
        path: '',
        component: HousesListComponent,
      },
      {
        path: ':id',
        component: HousesDetailComponent,
        resolve: { house: HouseResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
