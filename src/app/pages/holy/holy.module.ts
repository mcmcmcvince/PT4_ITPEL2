import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolyPageRoutingModule } from './holy-routing.module';

import { HolyPage } from './holy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolyPageRoutingModule
  ],
  declarations: [HolyPage]
})
export class HolyPageModule {}
