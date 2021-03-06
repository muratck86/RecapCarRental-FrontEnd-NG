import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { RentDtoComponent } from './components/rent-dto/rent-dto.component';
import { CarDtoService } from './services/carDto.service';
import { HttpClientModule } from '@angular/common/http';
import { CarImageService } from './services/carImage.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { SearchcarPipe } from './pipes/searchcar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarDtoComponent,
    RentDtoComponent,
    SearchcarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarDtoService, CarImageService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
