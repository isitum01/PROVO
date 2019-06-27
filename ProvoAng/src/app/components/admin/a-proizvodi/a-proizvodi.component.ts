import { Component, OnInit } from '@angular/core';
import { ProizvodiService } from 'src/app/services/proizvodi.service';
import { NgForm } from '@angular/forms';
import { Proizvod } from 'src/app/models/proizvod.model';

@Component({
  selector: 'app-a-proizvodi',
  templateUrl: './a-proizvodi.component.html',
  styleUrls: ['./a-proizvodi.component.css']
})
export class AProizvodiComponent implements OnInit {

  constructor(private servicePro: ProizvodiService) { }

  ngOnInit() {
    this.servicePro.getProizvod();
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.servicePro.formProizvod = {
      pID: null,
      pNaziv: '',
      pCijena: null,
      pStanje: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.pID == null){
      this.insertProizvod(form);
    }
    else
      this.updateProizvod(form);
  }

  insertProizvod(form: NgForm) {
    this.servicePro.postProizvod(form.value).subscribe(res => {
      this.servicePro.getProizvod();
      this.resetForm(form);
    });
  }
  editProizvod(pro: Proizvod) {
    this.servicePro.formProizvod = Object.assign({},pro);
  }
  updateProizvod(form: NgForm) {
    this.servicePro.putProizvod(form.value).subscribe(res => {
      this.resetForm(form);
      this.servicePro.getProizvod();
    });
    console.log("Updated");
  }
  removeProizvod(id: number){
    this.servicePro.deleteProizvod(id).subscribe(res =>{
    this.servicePro.getProizvod();
    });
  }
}
