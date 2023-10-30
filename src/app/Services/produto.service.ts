import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'http://localhost:8080/api/produtos'

  constructor(private httpClient: HttpClient) { }

  cadastraProduto(inputData: object) {

    return this.httpClient.post(this.api, inputData);

  }
}
