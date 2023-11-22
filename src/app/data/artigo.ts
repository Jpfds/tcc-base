export type artigoElemento = {
    elementoTipo: string,
    elementoConteudo: string,
    elementoAcessibilidade?: string,
}

export type artigo = {
    artigoId: number,
    artigoImg: string,
    artigoImgAlt: string,
    artigoTitulo: string,
    artigoDescricao: string,
    artigoElements: artigoElemento[]
}