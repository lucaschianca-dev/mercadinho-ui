import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/Services/produto.service';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})

export class CadastraProdutosComponent {

  constructor(private produtoService: ProdutoService) {

  }

  nome!: String;
  preco!: number;
  validade!: String;
  tipo!: String;
  descricaoCurta!: String;
  descricaoLonga!: String;

  erros: any = [];

  cadastraProduto() {

    var inputData = {
      nome: this.nome,
      preco: this.preco,
      validade: this.validade,
      tipo: this.tipo,
      descricaoCurta: this.descricaoCurta,
      descricaoLonga: this.descricaoLonga
    }

    this.produtoService.cadastraProduto(inputData).subscribe({
      next: (res: any) => {
        console.log(res, );
      },
      error: (err: any) => {
        this.erros = err.error.erros;
        console.log(err.error.errors, 'erros');
      }
    });

  }

}
