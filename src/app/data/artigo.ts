export type artigoElemento = {
    elementoTipo: string,
    elementoConteudo: string
}

export type artigo = {
    artigoId: number,
    artigoImg: string,
    artigoTitulo: string,
    artigoDescricao: string,
    artigoElements: artigoElemento[]
}