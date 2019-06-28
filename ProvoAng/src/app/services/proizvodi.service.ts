import { Injectable } from '@angular/core';
import { Proizvod } from '../models/proizvod.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  formProizvod: Proizvod;
  listPro: Proizvod[];
  readonly rootURL = "http://localhost:55215/api";

  constructor(private http: HttpClient) { }

  postProizvod(formProizvod: Proizvod) {
    return this.http.post(this.rootURL + '/Proizvodi', formProizvod);
  }
  getProizvod() {
    this.http.get(this.rootURL + '/Proizvodi').subscribe(res => this.listPro = res as Proizvod[]);
  }
  putProizvod(formProizvod: Proizvod) {
    return this.http.put(this.rootURL + '/Proizvodi/' + formProizvod.pID, formProizvod);
  }
  deleteProizvod(id: number) { 
    return this.http.delete(this.rootURL + '/Proizvodi/' + id);
  }
}
