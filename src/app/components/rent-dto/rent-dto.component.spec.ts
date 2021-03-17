import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDtoComponent } from './rent-dto.component';

describe('RentDtoComponent', () => {
  let component: RentDtoComponent;
  let fixture: ComponentFixture<RentDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
