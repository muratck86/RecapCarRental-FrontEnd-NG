import { Component, OnInit } from '@angular/core';
import { RentDto } from 'src/app/models/rentDto';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent-dto',
  templateUrl: './rent-dto.component.html',
  styleUrls: ['./rent-dto.component.css']
})
export class RentDtoComponent implements OnInit {

  rents:RentDto[] = []

  constructor(private rentService:RentService) { }

  ngOnInit(): void {
    this.getRentDtos()
  }

  getRentDtos(){
    this.rentService.getRentDtos().subscribe(result => {
      this.rents = result.data
    })
  }

}
