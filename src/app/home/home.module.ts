import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../components/shared.module';
import { LocationComponent } from '../components/location/location.component';
import { ModalModule } from '../modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ModalModule,
    FormsModule,
  ],
  entryComponents: [LocationComponent],
})
export class HomeModule {}
