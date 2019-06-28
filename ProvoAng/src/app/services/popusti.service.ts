import { Injectable } from '@angular/core';
import { Popust } from '../models/popust.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopustiService {

  formPopust: Popust;
  listPop: Popust[];
  readonly rootURL = "http://localhost:55215/api";

  constructor(private http: HttpClient) { }

  postPopust(formPopust: Popust) {
    return this.http.post(this.rootURL + '/Popusti', formPopust);
  }
  getPopust() {
    this.http.get(this.rootURL + '/Popusti').subscribe(res => this.listPop = res as Popust[]);
  }
  putPopust(formPopust: Popust) {
    return this.http.put(this.rootURL + '/Popusti/' + formPopust.popID, formPopust);
  }
  deletePopust(id: number) { 
    return this.http.delete(this.rootURL + '/Popusti/' + id);
  }
}
