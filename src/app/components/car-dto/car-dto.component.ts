import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/carDto.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})
export class CarDtoComponent implements OnInit {

  carDtoList:CarDto[] = []

  constructor(private carDtoService:CarDtoService) { }

  ngOnInit(): void {
    this.getCarDetailsList()
  }

  getCarDetailsList(){
    this.carDtoService.getCarDtoList().subscribe(result => {
      this.carDtoList = result.data
    })
  }

}
