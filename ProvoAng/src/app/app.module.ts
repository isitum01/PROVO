import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { KorisniciService } from './services/korisnici.service';
import { KosaricaService } from './services/kosarica.service';
import { NarudzbeService } from './services/narudzbe.service';
import { PopustiService } from './services/popusti.service';
import { ProizvodiService } from './services/proizvodi.service';
import { ANarudzbeComponent } from './components/admin/a-narudzbe/a-narudzbe.component';
import { AProizvodiComponent } from './components/admin/a-proizvodi/a-proizvodi.component';
import { APopustiComponent } from './components/admin/a-popusti/a-popusti.component';
import { AKorisniciComponent } from './components/admin/a-korisnici/a-korisnici.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    ANarudzbeComponent,
    AProizvodiComponent,
    APopustiComponent,
    AKorisniciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KorisniciService,
    KosaricaService,
    NarudzbeService,
    PopustiService,
    ProizvodiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
