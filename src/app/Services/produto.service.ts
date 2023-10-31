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
}
