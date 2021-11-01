import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodaDetailPageRoutingModule } from './soda-detail-routing.module';

import { SodaDetailPage } from './soda-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodaDetailPageRoutingModule
  ],
  declarations: [SodaDetailPage]
})
export class SodaDetailPageModule {}
