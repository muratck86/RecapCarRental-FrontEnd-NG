import { Component, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {


  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  
  public set searchText(v : string) {
    this.searchService.searchText = v;
  }
  
  public get searchText() : string {
    return this.searchService.searchText
  }
  
  

}
