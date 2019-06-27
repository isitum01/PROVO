import { Component, OnInit } from '@angular/core';
import { PopustiService } from 'src/app/services/popusti.service';
import { NgForm } from '@angular/forms';
import { Popust } from 'src/app/models/popust.model';

@Component({
  selector: 'app-a-popusti',
  templateUrl: './a-popusti.component.html',
  styleUrls: ['./a-popusti.component.css']
})
export class APopustiComponent implements OnInit {

  constructor(private servicePop: PopustiService) { }

  ngOnInit() {
    this.resetForm();
    this.servicePop.getPopust();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.servicePop.formPopust = {
      popID: null,
      popKod: '',
      popIznos: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.popID == null){
      this.insertPopust(form);
    }
    else
      this.updatePopust(form);
  }

  insertPopust(form: NgForm) {
    this.servicePop.postPopust(form.value).subscribe(res => {
      this.servicePop.getPopust();
      this.resetForm(form);
    });
  }
  editPopust(pop: Popust) {
    this.servicePop.formPopust = Object.assign({},pop);
  }
  updatePopust(form: NgForm) {
    this.servicePop.putPopust(form.value).subscribe(res => {
      this.resetForm(form);
      this.servicePop.getPopust();
    });
    console.log("Updated");
  }
  removePopust(id: number){
    this.servicePop.deletePopust(id).subscribe(res =>{
    this.servicePop.getPopust();
    });
  }
}
