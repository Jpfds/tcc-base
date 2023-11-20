import { artigo } from "./artigo";


export const artigoDatabase : artigo[] = [
    {
        artigoId: 1,
        artigoImg: "https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg" ,
        artigoTitle:"Crash Twinsannity.",
        artigoDescricao: "Uma aventura espetacular",
        artigoElements:    [
            {
                elementType : 'h2',
                elementcontent: 'Crash Twinsannity.'
            },
            {
                elementType: 'img',
                elementcontent: 'https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg'
            },
            {
                elementType: 'p',
                elementcontent: 'Uma aventura espetacular'
            },
        ]
    }
]