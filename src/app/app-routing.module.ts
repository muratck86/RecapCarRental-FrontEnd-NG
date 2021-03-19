import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDtoComponent } from './components/car-dto/car-dto.component';

const routes: Routes = [
  { path: "", component: CarDtoComponent, pathMatch: "full" },
  { path: "cars/brand/:brandName", component: CarDtoComponent },
  { path: "cars/color/:colorName", component: CarDtoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
