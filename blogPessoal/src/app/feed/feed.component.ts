import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit { // tudo que estiver dentro da class é a minha lógica

  key = 'data'
  reverse = true


  // Criamos uma variável listaPostagem que recebe o objeto Postagem, como eu quero varias postagens eu coloco um Array de objetos []
  // getAll
  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  id:number

  // post
  alerta: boolean = false
  titulo: string
  pesquisa:boolean = false

  // Tudo que estiver dentro de construtor é uma injeção de dependência
  constructor(private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private locationPage: Location) { }

  // tudo que estiver dentro do método ngOnInit é aquilo que vais ser carregado quando eu abrir a aplicação
  ngOnInit() {
    this.findallPostagens()
    let item: string = localStorage.getItem('delOk')
    window.scroll(0, 0)// isso fará com que ao clicar em um botão que direcione ao outra página ele carregue e fique no começo dela
    if (item == "true") {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        this.refresh()
      }, 3000)

    }
  }

  findallPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      location.assign('/feed') // com isso ele vaia tualizar automaticamente
      this.refresh()
    })
  }

  pesquisarPorTitulo() {
    this.postagemService.findByTitulo(this.titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
      this.pesquisa = true
    }, err =>{
      console.log(err)
    }
    )
  }
  refresh() {
    this.router.navigateByUrl('/lista-post', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([this.locationPage.path()])
      })
  }

}
