import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService { //Será nessa classe que trabalharemos iremos construir aqui todo o nosso contato com o back-end

  constructor(private http: HttpClient) { }

  /*CRUD – Create, Ready, Update and Delete */

  // o nome desse método é aleatório poderia ser qualquer coisa, mas por padrão colocamos isso
  getAllPostagens(){ // para trazer todas as postagens que existem no meu servidor  
    return this.http.get('http://31.220.57.14:8080/postagens');

  }
}
