import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vaccine } from './vaccine';
import { VaccineService } from './vaccine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public vaccines: Vaccine[];

  constructor(private vaccineService: VaccineService) {
    this.vaccines = [];
  }

  ngOnInit(): void {
    this.getVaccines();
  }

  public getVaccines(): void {
    this.vaccineService.getVaccines().subscribe(
      (res: Vaccine[]) => {
        this.vaccines = res;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public searchByResearchName(researchName: string): void {

    let vaccine = null;
    this.vaccineService.getVaccineByResearchName(researchName).subscribe((res) => {
      vaccine = res;

      if (researchName) {
        if (vaccine !== null) {
          this.vaccines = [vaccine];
        }
      }
      else
        this.getVaccines();
    });


  }
}
