import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolyPage } from './holy.page';

const routes: Routes = [
  {
    path: '',
    component: HolyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolyPageRoutingModule {}
