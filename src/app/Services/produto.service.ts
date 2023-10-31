import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'http://localhost:8080/api/produtos'

  constructor(private httpClient: HttpClient) { }

  cadastraProduto(cadastroDto: any) {

    return this.httpClient.post<IProduto>(this.api, cadastroDto);
  }

  findProdutos() {
    return this.httpClient.get<IProduto[]>(this.api);
  }

  findProdutosInativos() {
    return this.httpClient.get<IProduto[]>(this.api + '/inativos')
  }

  inativaProduto(id: number) {
    return this.httpClient.delete<IProduto>(this.api + '/inativa/' + id)
  }

  excluiProduto(id: number) {
    return this.httpClient.delete<IProduto>(this.api + '/' + id)
  }
}
