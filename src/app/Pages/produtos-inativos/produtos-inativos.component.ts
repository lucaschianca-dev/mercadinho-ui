import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/Services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-inativos',
  templateUrl: './produtos-inativos.component.html',
  styleUrls: ['./produtos-inativos.component.css']
})
export class ProdutosInativosComponent {

  produtos: IProduto[] = [];
  pageSizeOptions: number[] = [1, 25, 50];
  pageSize: number = 1;

  constructor(
    private produtoService: ProdutoService,
    private route:ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.listaProdutosInativos();
  }

  listaProdutosInativos() {
    this.produtoService.findProdutosInativos().subscribe((produtos) => {
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
          this.produtosAtualizados();
        });
      }
    });
  }

  ativaProduto(id: number) {
    Swal.fire({
      title: 'Deseja ativar este produto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, ativar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.ativaProduto(id).subscribe(() => {
          Swal.fire('Ativado!', 'Produto ativado', 'success');
          this.produtosAtualizados();
        });
      }
    });
  }

  private produtosAtualizados() {
    this.router.navigate(["/produtos"]);
  }
}
