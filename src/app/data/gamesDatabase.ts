import { games } from "./games";

export const gamesDatabase: games[] = [
    {
        gamesId: 1,
        gamesCover: "../../assets/games.jpg",
        gamesCoverAlt: "",
        gamesTitulo: " A importancia da acessibilidade nos games.",
        gamesDescricao: "A importancia da acessibilidade nos games.",
        gamesElements: [
            {
                elementoTipo : 'h2',
                elementoConteudo: 'A importância da acessibilidade nos games.'
            },
            {
                elementoTipo: 'img',
                elementoConteudo: '../../assets/games.jpg',
                elementoAcessibilidade: 'Montagem de imagens sobre 3 jogos separados por colunas sendo:The last of Us 2, God of War Ragnarok e Spider Man Miles Morales.'
            },
            {
                elementoTipo: 'p',
                elementoConteudo: 'A acessibilidade nos games vem para trazer a inclusão para todos que almejam se divertir sem perder a comodidade, para tornar mais acessiveis os jogos com o uso de softwares de assistencia de mira, audio legendas, etc. As pessoas com deficiencias fisicas, aditivas, visual e tambem intelectual desejam ter o mesmo acesso como todo mundo, é necessario que as empresas de jogos atendam todas exigencias dos seus consumidores e estabelação um padrão para a construção dos jogos se tornarem mais acessiveis.'
            },
        ]

    }
]