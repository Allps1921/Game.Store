import type Especificacoes from "./especificacoes";
import type Precificavel from "./Precificavel";

// extends permite que o produto herde informações através de relação de herança
export default interface Produto extends Precificavel {
 id: number;
 nome: string;
 descricao: string;
 marca: string;
 modelo: string;
 imagem: string;
 videoReview: string;
 nota: number;
 tags: string[];
 
 // relação de composição para resgate de infomações
 especificacoes: Especificacoes;
}