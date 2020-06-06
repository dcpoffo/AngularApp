import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { UsuarioApagaComponent } from './usuario/usuario-apaga.component';
import { UsuarioAtualizaComponent } from './usuario/usuario-atualiza.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    UsuarioApagaComponent,
    UsuarioAtualizaComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'usuarios-cadastra', component: UsuarioCadastroComponent },
      { path: 'usuarios-apaga', component: UsuarioApagaComponent },
      { path: 'usuarios-atualiza', component: UsuarioAtualizaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
