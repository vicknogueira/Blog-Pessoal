import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  alerta:boolean = false

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findallPostagens()
  }

  findallPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => { 
      this.listaPostagens = resp
    })  
  }
}
