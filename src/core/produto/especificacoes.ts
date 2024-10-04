export default interface Especificacoes {
 destaque: string;
 // cria atributos a partir da chave definida e interpretada como texto
 [chave: string]: string | number | boolean;
}