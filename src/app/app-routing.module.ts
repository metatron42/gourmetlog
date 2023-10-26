import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPageComponent } from './header-page/header-page.component';
import { AgendaRestauranteComponent } from './agenda-restaurante/agenda-restaurante.component';


const routes: Routes = [
  {path:'', redirectTo: '/index', pathMatch: 'full'},
  {path:"headerpage", component: HeaderPageComponent},
  {path:"agendarestaurante", component: AgendaRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
