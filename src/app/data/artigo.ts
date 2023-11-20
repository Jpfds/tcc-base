export type artigoElement = {
    elementType: string,
    elementcontent: string
}

export type artigo = {
    artigoId: number,
    artigoImg: string,
    artigoTitle: string,
    artigoDescricao: string,
    artigoElements: artigoElement[]
}