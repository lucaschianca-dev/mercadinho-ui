import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProdutosComponent } from './Pages/produtos/produtos.component';
import { CadastraProdutosComponent } from './Pages/cadastra-produtos/cadastra-produtos.component';
import { ProdutosInativosComponent } from './Pages/produtos-inativos/produtos-inativos.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home'
  },

  {
    path: 'produtos', component: ProdutosComponent, title: 'Produtos'
  },

  {
    path: 'produtos/cadastrar', component: CadastraProdutosComponent, title: 'Cadastrar Produto'
  },

  {
    path: 'produtos/inativos', component: ProdutosInativosComponent, title: 'Produtos Inativos'
  },

  {
    path: 'produtos/cadastrar/:id', component: CadastraProdutosComponent, title: 'Atualizar Produto'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
