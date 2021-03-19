import { Component, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[]
  allBrands:string = "All"
  currentBrand:string = this.allBrands
  currentBrandClass:string = "list-group-item list-group-item-action list-group-item-dark"
  brandNames:Set<string> = new Set()
  @Output() brandName:string = ""

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.brandService.getBrands().subscribe(result => {
      this.brands = result.data
      this.getBrandNames(this.brands)
    })
  }

  getBrandNames(brands:Brand[]) {
    brands.forEach(brand => {
      this.brandNames.add(brand.name)
    });
  }

  setCurrentBrand(brandName:string) {
    this.currentBrand = brandName
  }

  getCurrentBrandClass(brandName:string) {
    return brandName == this.currentBrand
    ? "list-group-item list-group-item-action list-group-item-dark active"
    : "list-group-item list-group-item-action list-group-item-dark"
  }

}
