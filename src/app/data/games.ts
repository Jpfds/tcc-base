export type gameelemento = {
    elementoTipo: string,
    elementoConteudo: string,
    elementoAcessibilidade?: string,
}

export type games = {
    gamesId: number,
    gamesTitulo: string,
    gamesCover: string,
    gamesCoverAlt: string,
    gamesDescricao: string,
    gamesElements: gameelemento[]
}