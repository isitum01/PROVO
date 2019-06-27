import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { NavbarComponent } from './components/navbar/navbar.component'; ovo izbrisat kad dodamo ostale komponente
import { AdminComponent } from './components/admin/admin.component';
import { AKorisniciComponent } from './components/admin/a-korisnici/a-korisnici.component';
import { ANarudzbeComponent } from './components/admin/a-narudzbe/a-narudzbe.component';
import { APopustiComponent } from './components/admin/a-popusti/a-popusti.component';
import { AProizvodiComponent } from './components/admin/a-proizvodi/a-proizvodi.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'akorisnici', component: AKorisniciComponent},
      {path: 'anarudzbe', component: ANarudzbeComponent},
      {path: 'apopusti', component: APopustiComponent},
      {path: 'aproizvodi', component: AProizvodiComponent}
    ]
}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
