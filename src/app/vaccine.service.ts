import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaccine } from './vaccine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  // private apiUrl = environment.apiURL + "/api/vaccine";
  private apiUrl = "api/vaccine";

  constructor(private http: HttpClient) { }

  public getVaccines(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.apiUrl}`);
  }

  public getVaccineByResearchName(researchName: string): Observable<Vaccine> {
    return this.http.get<Vaccine>(`${this.apiUrl}/?researchName=${researchName}`);
  }

  public addVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.apiUrl}/add`, vaccine);
  }

  public updateVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.put<Vaccine>(`${this.apiUrl}/update`, vaccine);
  }

  public deleteVaccine(vaccineId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${vaccineId}`);
  }
}
