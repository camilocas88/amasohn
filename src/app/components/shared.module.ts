import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentMidComponent } from './content-mid/content-mid.component';
import { OffersComponent } from './offers/offers.component';
import { ProductComponent } from './product/product.component';
import { LocationComponent } from './location/location.component';

const components = [
  CarouselComponent,
  ContentMidComponent,
  OffersComponent,
  BannerComponent,
  ProductComponent,
  LocationComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [components],
  exports: [components],
})
export class SharedModule {}
