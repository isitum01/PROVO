import { Component, OnInit } from '@angular/core';
import { KorisniciService } from 'src/app/services/korisnici.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-a-korisnici',
  templateUrl: './a-korisnici.component.html',
  styleUrls: ['./a-korisnici.component.css']
})
export class AKorisniciComponent implements OnInit {

  constructor(private serviceKor: KorisniciService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.serviceKor.formKorisnik = {
      kID: null,
      kIme: '',
      kPrezime: '',
      kEmail: '',
      kPass: '',
      kDrzava: '',
      kGrad: '',
      kUlica: '',
      kBroj: ''
    }
  }

  onSubmit(form: NgForm){
    this.insertKorisnik(form);
    console.log(form.value);
  }
  insertKorisnik(form: NgForm){
    this.serviceKor.postKorisnik(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }
}
