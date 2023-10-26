import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FiltroPesquisaComponent } from './filtro-pesquisa/filtro-pesquisa.component';
import { AgendaRestauranteComponent } from './agenda-restaurante/agenda-restaurante.component';
import { RestauranteResultadoComponent } from './restaurante-resultado/restaurante-resultado.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { IndexComponent } from './index/index.component';
import { AdminRestauranteComponent } from './admin-restaurante/admin-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FiltroPesquisaComponent,
    AgendaRestauranteComponent,
    RestauranteResultadoComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    CadastroRestauranteComponent,
    IndexComponent,
    AdminRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
