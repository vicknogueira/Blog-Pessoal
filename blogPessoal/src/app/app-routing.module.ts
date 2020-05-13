import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { ListaPostComponent } from './lista-post/lista-post.component';



const routes: Routes = [ // { } -> é objeto
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // Para quando a rota estiver vazia, ele redirecionar para home
  { path: 'home', component: HomeComponent}, //Criamos uma rota home, que vai trazer o componente HomeComponent
  { path: 'feed', component: FeedComponent},
  {path: 'editar/:id', component:EditarComponent},
  {path:'deletar', component:DeletarComponent},
  {path:'deletar/:id', component:DeletarComponent},
  {path:'lista-post', component:ListaPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
