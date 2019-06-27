import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {
 
  formKorisnik: Korisnik;
  readonly rootUrl = "http://localhost:50963/api";
  
  constructor(private http: HttpClient) { }

  postKorisnik(formKorisnik: Korisnik){
    return this.http.post(this.rootUrl + '/Korisnici', formKorisnik);

  }
}
