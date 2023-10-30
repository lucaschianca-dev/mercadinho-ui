export interface IProdutos {
    id: number;
    nome: string;
    preco: number;
    validade: string;
    tipo: string;
    codigoBarras?: string;
    descricaoCurta: string;
    descricaoLonga: string;
}
