import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/Services/produto.service';
import { IProduto } from 'src/app/interfaces/produto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})

export class CadastraProdutosComponent {

  constructor(private produtoService: ProdutoService) {}

  produtoForm = new FormGroup({
    id: new FormControl(0, {nonNullable: true}),
    nome: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    preco: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
    validade: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    tipo: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    descricaoCurta: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    descricaoLonga: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  });

  enviar() {
    const produto: Partial<IProduto> = this.produtoForm.value as IProduto;
    produto.ativo = true;

    console.log(produto);

    this.produtoService.cadastraProduto(produto).subscribe((result) => {
      Swal.fire(
        'CONFIRMADO!',
        'Produto cadastrado com sucesso!',
        'success'
      );
    },
    (error) => {
      const { message } = error;

      Swal.fire('Ops...', message, 'error');
    });
  }
}
