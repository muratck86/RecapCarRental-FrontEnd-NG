import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/carDto.service';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css']
})

export class CarDtoComponent implements OnInit {

  carDtoList:CarDto[] = []
  carPhotos:CarImage[] = []
  currentCar:CarDto = {
    id:0,
    brandName:"",
    modelName:"",
    bodyType:"",
    colorName:"",
    dailyPrice:0,
    fuelType:"",
    metalic:false,
    modelYear:0,
    descript:"",
    gearType:"",
    plate:"",
    wheelDrive:""
  }

  imageUrlApp:string = "http://localhost:5000/images"

  constructor(private carDtoService:CarDtoService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      if(route["brandName"]) {
        this.getCarDetailsListByBrand(route["brandName"])
      } else if (route["colorName"]) {
        this.getCarDetailsListByColor(route["colorName"])
      } else {
        this.getCarDetailsList()
      }
    })
    
  }

  getCarDetailsList(){
    this.carDtoService.getCarDtoList().subscribe(result => {
      this.carDtoList = result.data
      console.log(this.carDtoList)
    })
  }

  getCarDetailsListByBrand(brandName:string) {
    this.carDtoService.getCarDetailsByBrand(brandName).subscribe(result => {
      this.carDtoList = result.data
    })
  }

  getCarDetailsListByColor(colorName:string) {
    this.carDtoService.getCarDetailsByColor(colorName).subscribe(result => {
      this.carDtoList = result.data
    })
  }

  getCarPhotos(carId:number) {
    this.carImageService.getCarImages(carId).subscribe(result => {
      this.carPhotos = result.data
      this.carPhotos.forEach(photo => {
        photo.imagePath = this.imageUrlApp + photo.imagePath.substring(photo.imagePath.lastIndexOf("\\"), photo.imagePath.length)
      })
    })
  }

  selectCar(car:CarDto) {
    this.currentCar = car
    this.getCarPhotos(car.id)
  }

}
