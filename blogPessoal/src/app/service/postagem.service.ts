import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService { //Será nessa classe que trabalharemos iremos construir aqui todo o nosso contato com o back-end

  constructor(private http: HttpClient) { }

  /*CRUD – Create(post), Read(get), Update(put) and Delete(delete) */


  // READ
  // o nome desse método é aleatório poderia ser qualquer coisa, mas por padrão colocamos isso
  // para trazer todas as postagens que existem no meu servidor, ele é o método get()
  getAllPostagens(){ 
    return this.http.get('http://31.220.57.14:8080/postagens');
  }

  //CREATE
  // O nome desse método também poderia ser diferente, ele irá postar, post()
  postPostagem(postagem: Postagem){// http pois vai ser por ele que faremos contato com o servidor
    return this.http.post('http://31.220.57.14:8080/postagens', postagem); // Vou abrir o meu servidor e enviar uma postagem
  }

    // novo endpoint: 
    // como queremos editar só uma postagem
    putPostagem(postagem: Postagem){
      return this.http.put('http://31.220.57.14:8080/postagens', postagem);
    }

    // Outro endPoint
    getByIdPostagem(id:number){
      return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
    }

    deletePostagem(id:number){
      return this.http.delete(`http://31.220.57.14:8080/postagens/${id}`)
    }
}
