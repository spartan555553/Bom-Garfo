import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodsPage } from './foods.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsPageRoutingModule {}
