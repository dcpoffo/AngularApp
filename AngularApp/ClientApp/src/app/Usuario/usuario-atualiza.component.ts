import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})

export class UsuarioComponent {
  usuarios: Usuario[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Usuario[]>(baseUrl + "usuarios/get_usuarios")
      .subscribe(res => {
        this.usuarios = res;
        console.log(this.usuarios);
      }, error => console.log(error));
  }
}

interface Usuario {
  nome: string,
  sobrenome: string,
  email: string
}
