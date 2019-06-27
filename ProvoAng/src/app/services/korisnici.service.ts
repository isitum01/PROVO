import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {
  formKorisnik: Korisnik;
  
  constructor() { }
}
