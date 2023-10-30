import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProdutosComponent } from './Pages/produtos/produtos.component';
import { CadastraProdutosComponent } from './Pages/cadastra-produtos/cadastra-produtos.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
