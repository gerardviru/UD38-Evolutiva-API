import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { DatosComponent } from './datos/datos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Characters',
    component: CharactersComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Datos',
    component: DatosComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
