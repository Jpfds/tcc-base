import { artigo } from "./artigo";


export const artigoDatabase : artigo[] = [
    {
        artigoId: 1,
        artigoImg: "https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg" ,
        artigoTitulo:"Crash Twinsannity.",
        artigoDescricao: "Uma aventura espetacular",
        artigoElements:    [
            {
                elementoTipo : 'h2',
                elementoConteudo: 'Crash Twinsannity.'
            },
            {
                elementoTipo: 'img',
                elementoConteudo: 'https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'Uma aventura espetacular'
            },
        ]
    },
    {
        artigoId: 2,
        artigoImg: "../../assets/Bertie the brain.jpg" ,
        artigoTitulo:"Primeiro jogo a ter acessibilidade.",
        artigoDescricao: "Uma aventura espetacular",
        artigoElements:    [
            {
                elementoTipo : 'h2',
                elementoConteudo: 'Crash Twinsannity.'
            },
            {
                elementoTipo: 'img',
                elementoConteudo: '../../assets/Bertie the brain.jpg'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'Bertie the brain.'
            },
        ]
        
    },

]