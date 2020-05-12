import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  postagem: Postagem = new Postagem
  delOk:boolean = false

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    }, err =>{
      console.log(`Erro na busca do id cod: ${err.status}`)
    }
    )
  }

  btnSim(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
      this.delOk = true
      this.router.navigate(['/loja'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }
  btnNao(){
    this.router.navigate(['/loja'])
  }

}
