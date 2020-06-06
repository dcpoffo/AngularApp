import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})

export class UsuarioCadastroComponent {
  usuario: Usuario;
  client: HttpClient;
  baseUrl: string;

  nome: string;
  sobrenome: string;
  email: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.client = http;
    this.baseUrl = baseUrl;
  }

  postUsuario(): void {
    this.usuario = { nome: this.nome, sobrenome: this.sobrenome, email: this.email };
    this.client.post<Usuario>(this.baseUrl + "usuarios/post_usuarios", this.usuario).subscribe(res => {
      console.log(res)
    }, error => console.log(error));
  }
}

interface Usuario {
  nome: string,
  sobrenome: string,
  email: string
}
