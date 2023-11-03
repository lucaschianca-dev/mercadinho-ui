import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/Services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = [];
  pageSizeOptions: number[] = [1, 25, 50];
  pageSize: number = 1;
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private produtoService: ProdutoService) {}

  ngOnInit() {
    this.listaProdutos();
  }

  listaProdutos() {
    this.produtoService.findProdutos().subscribe((produtos) => {
      if (Array.isArray(produtos)) {
        this.produtos = produtos;
      }
    },
    (error) => {
      console.log(error);
    });
  }

  onPageChange(event: any) {
    console.log(this.pageSize)
    this.pageSize = event.pageSize;
    console.log(this.pageSize)
  }

  inativaProduto(id: number) {
    Swal.fire({
      title: 'Deseja inativar o produto?',
      text: "Poderá ativa-lo posteriormente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, inativar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.inativaProduto(id).subscribe(() => {
          Swal.fire('Inativado!', 'Produto inativado', 'success');
          this.listaProdutos();
        });
      }
    });
  }

  excluiProduto(id: number) {
    Swal.fire({
      title: 'Deseja excluir o produto?',
      text: "Esta alteração não poderá ser desfeita",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.excluiProduto(id).subscribe(() => {
          Swal.fire('Excluido!', 'Produto excluido', 'success');
          this.listaProdutos();
        });
      }
    });
  }
}
