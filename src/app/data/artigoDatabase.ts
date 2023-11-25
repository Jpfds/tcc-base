import { artigo } from "./artigo";


export const artigoDatabase : artigo[] = [
    {
        artigoId: 1,
        artigoImg: "https://i.imgur.com/3mCzCbz.jpg" ,
        artigoImgAlt: "Montagem de imagens sobre 3 jogos separados por colunas sendo:The last of Us 2, God of War Ragnarok e Spider Man Miles Morales.",
        artigoTitulo:"A importancia da acessibilidade nos games.",
        artigoDescricao: "A acessibilidade nos games vem para trazer a inclusão para todos que almejam se divertir sem perder a comodidade, para tornar mais acessiveis os jogos com.....",
        artigoElements:    [
            {
                elementoTipo: 'img',
                elementoConteudo: 'https://i.imgur.com/3mCzCbz.jpg',
                elementoAcessibilidade: 'Montagem de imagens sobre 3 jogos separados por colunas sendo:The last of Us 2, God of War Ragnarok e Spider Man Miles Morales.'
            },
            {
                elementoTipo : 'h2',
                elementoConteudo: 'A importância da acessibilidade nos games.'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'A acessibilidade nos games vem para trazer a inclusão para todos que almejam se divertir sem perder a comodidade, para tornar mais acessiveis os jogos com o uso de softwares de assistencia de mira, audio legendas, contraste, rapeamento de botões, etc. As pessoas com deficiencias fisicas, auditivas, visual e tambem intelectual desejam ter o mesmo acesso como todo mundo, é necessario que as empresas de jogos atendam todas exigencias dos seus consumidores e estabelação um padrão para a construção dos jogos se tornarem mais acessiveis.'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'Se todos as empresas utilizassem todos os tipos de software de acessibilidade, com certeza teria publico maior. '
            }
           
        ]
    },
    {
        artigoId: 2,
        artigoImg: "https://i.imgur.com/dXHQ0YR.jpg" ,
        artigoImgAlt: "Foto do comediante Danny Kaye em pé à frente do jogo de Bertie The Brain.",
        artigoTitulo:"Primeiro jogo a ter acessibilidade.",
        artigoDescricao: "É dificil pensar qual foi o primeiro jogo, pois há mais de 45 mil titulos de todos os tipos de jogos e plataformas, mas, quem poderia imaginar que o primeiro....",
        artigoElements:    [
            {
                elementoTipo: 'img',
                elementoConteudo: 'https://i.imgur.com/dXHQ0YR.jpg',
                elementoAcessibilidade: 'Foto do comediante Danny Kaye em pé à frente do jogo de Bertie The Brain.'
            },
            {
                elementoTipo : 'h2',
                elementoConteudo: 'Primeiro jogo a ter acessibilidade.'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'É dificil pensar qual foi o primeiro jogo, pois há mais de 45 mil titulos de todos os tipos de jogos e plataformas, mas, quem poderia imaginar que o primeiro ter acessibilidade foi o classico "jogo da velha". Constituido por um computador de quatro metros de altura construido com os tubos Additron chamado Bertie The Brain. Pode parecer algo simples mas é algo que revolucionou no fator de inclusividade, o que torna esse jogo inclusivo é o jogador ter acesso a diferentes niveis de dificuldade, com o uso desse recurso tornava as partidas mais abertas a diversos públicos.'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'Vale lembrar que seu lançamento ocorreu no dia 25 de agosto de 1950 na exposição canadense.'
            }
        ]
        
    },
    

]