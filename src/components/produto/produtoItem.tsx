import { Produto } from "@/core";
import Link from "next/link";

// produz uma propriedade para o componente ProdutoItem
export interface ProdutoItemProps {
 produto: Produto;
}
export default function ProdutoItem(props: ProdutoItemProps) {
 const { produto } = props;

 // renderiza o dado definido do produto que consta na pasta './constants/produtos.ts
 // produto/${produto.id} retorna os dados da pasta e cria uma nova tela de navegação
 return <Link href={`/produto/${produto.id}`}>{props.produto.nome}</Link>;
}