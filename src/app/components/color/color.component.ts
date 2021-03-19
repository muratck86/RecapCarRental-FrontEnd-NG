import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = []
  allColors:string = "All"
  currentColor:string= this.allColors
  currentColorClass:string = "list-group-item"
  colorNames:Set<string> = new Set()
  @Input() brandName:string=""

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe(result => {
      this.colors = result.data
      this.getColorNames(this.colors)
    })
  }

  getColorNames(colors:Color[]) {
    colors.forEach(color => {
      this.colorNames.add(color.name)
    })
  }


  setCurrentColor(colorName:string) {
    this.currentColor = colorName
  }

  getCurrentColorClass(colorName:string) {
    return this.currentColor == colorName
    ? "list-group-item list-group-item-action list-group-item-dark active"
    : "list-group-item list-group-item-action list-group-item-dark"
  }

}
