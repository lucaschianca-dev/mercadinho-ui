import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/Services/produto.service';
import { IProduto } from 'src/app/interfaces/produto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastra-produtos',
  templateUrl: './cadastra-produtos.component.html',
  styleUrls: ['./cadastra-produtos.component.css']
})

export class CadastraProdutosComponent {

  pagina: string;

  constructor(
    private produtoService: ProdutoService,
    private route:ActivatedRoute,
    private router: Router
    ) {
      this.pagina = 'Cadastro';
    }

  produtoForm = new FormGroup({
    id: new FormControl(0, {nonNullable: true}),
    nome: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    preco: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
    validade: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    tipo: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    descricaoCurta: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    descricaoLonga: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  });

  ngOnInit(): void {
    const id: number = Number.parseInt(this.route.snapshot.paramMap.get('id') || '0');
    console.log(id)
    if(id !== 0) {
      this.pagina = 'Atualiza'
        this.produtoService.buscaPorId(id).subscribe(produto => {
          this.produtoForm.get('id')?.patchValue(produto.id);
          this.produtoForm.get('nome')?.patchValue(produto.nome);
          this.produtoForm.get('preco')?.patchValue(produto.preco);
          this.produtoForm.get('validade')?.patchValue(produto.validade);
          this.produtoForm.get('tipo')?.patchValue(produto.tipo);
          this.produtoForm.get('descricaoCurta')?.patchValue(produto.descricaoCurta);
          this.produtoForm.get('descricaoLonga')?.patchValue(produto.descricaoLonga);
        })
    } else {
      this.pagina = 'Cadastro';
    }
  }

  enviar() {
    const produto: Partial<IProduto> = this.produtoForm.value as IProduto;
    produto.ativo = true;

    console.log(produto);

    if(produto.id && produto.id !== 0) {
      console.log(produto.id)
      this.produtoService.atualizaProduto(produto).subscribe(produto => {
        Swal.fire(
          "SUCESSO!",
          "Produto atualizado",
          "success"
        );
        this.produtosAtualizados();
      },
      (error) => {
        Swal.fire(
          "Ops...",
          "Falha ao atualizar produto",
          "error"
        )
      });
      return;
    }

    console.log(produto.id);

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

  private produtosAtualizados() {
    this.router.navigate(["/produtos"]);
  }
}
