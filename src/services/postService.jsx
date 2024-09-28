import axios from 'axios';

import { urlAPI } from './apiConnection';
import * as tagService from './tagService';

export class Post {
    constructor(id, userID, title, content, isFixed, isUpdated, lastActivity) {
        this.id = id;
        this.userID = userID;
        this.title = title; 
        this.content = content;
        this.isFixed = isFixed;
        this.isUpdated = isUpdated;
        this.lastActivity = lastActivity;
    }
}

const createPostFromDatabase = (postData) => {
    return new Post(
        postData.id,
        postData.idUsuario,
        postData.titulo,
        postData.conteudo,
        postData.fixado,
        postData.atualizado,
        postData.ultimaAtividade);
}

/*
// const posts = [
//     new Post(1, 1, new Date(), [ getTags()[0] ], 'Como funcionam as postagens', 
// `# Como funcionam as postagens.

// Aqui você pode escrever o que quiser, talvez algo interessante, talvez até 
// incluir algumas imagens.

// ![](https://img.freepik.com/fotos-gratis/personagem-de-estilo-anime-no-espaco_23-2151134100.jpg)
// ___
// Tudo aqui é escrito em **Markdown** ou **MD** para simplicficar, uma 
// **linguagem de marcação**, ou em outras palavras, um meio de escrever que usa 
// símbolos e caracteres especiais para formatar seu texto.

// > **Porque usar Markdown?**
// >
// > É uma forma simples e rápida de criar textos. Podem conter conteúdos externos 
// > (*como conteúdo da internet*) como links, imagens e até mesmo vídeos e outros sites
// > se você decidir se aprofundar um pouquinho.

// Você vai usar o editor para escrever seus posts. O editor é divido em dois paineis:
// - O code (*painel da esquerda*) é onde você vai poder escrever e editar seus posts.
// - O preview (*painel da direita*) é onde você pode ver como seu post está ficando.

// Você pode alternar entre eles usando os botões na barra de ferramentas, que fica
// em cima do editor. Nela também vão ter alguns atalhos bem uteis.`),

//     new Post(2, 2, new Date(), [ getTags()[1] ], 'Como escrever em markdown', 
// `# Como escrever em markdown

// Um guia simples de como escrever em markdown, qualquer duvida, dê uma olhada no 
// painel da esquerda, nele tem vários exemplos de como tudo funciona.

// ## Como criar títulos

// O símbolo para criar títulos é o hashtag \`#\`. Para criar títulos use de 1 a 6 \`#\` 
// seguido de um espaço e o seu título. 

// > Não esqueça de deixar uma linha em branco entre seu título e seus parágrafos.

// \`\`\`md
// # Meu título principal
// \`\`\`
// ou
// \`\`\`md
// # Meu título secundário
// \`\`\`

// ## Como criar um parágrafo

// Parágrafos são separados por uma linha em branco entre eles, não precisa de mais 
// nada, o markdown vai entender e criar seus parágrafos.

// Parágrafos devem estar no começo da linha, evite colocar espaços antes de um parágrafo.

// \`\`\`md
// Parágrafo 1 ...
//             <- Linha em branco
// Parágrafo 2 ...
// \`\`\`

// ## Como formatar meu texto

// O símbolo para formatar textos é o \`*\`. 

// Você pode criar um *texto em itálico* usando o \`*\` seguido do texto e feche 
// usando o \`*\` novamente.

// \`\`\`md 
// *meu texto em itálico*
// \`\`\`

// Você pode criar um **texto em negrito** usando o dois \`*\` seguido do texto e 
// feche usando dois \`*\` novamente.

// \`\`\`md 
// **meu texto em negrito**
// \`\`\`

// Você pode combinar os dois para criar um ***texto em itálico e negrito*** usando 
// três \`*\` seguido do texto e feche usando três \`*\` novamente.

// \`\`\`md 
// ***meu texto em itálico e negrito***
// \`\`\`

// ## Como separar meu texto

// Alguns textos precisam estar separados para fazerem sentido na hora de ler. 

// Para criar uma barra que separa seu texto use três underlines \`_\` seguidos.

// \`\`\`md 
// Cria uma barra que separa esse parágrafo...
// _ _ _ 
// ...deste outro.
// \`\`\`
// ___

// Algumas vezes você quer que seu texto continue na linha de baixo, mas no markdown 
// não é tão simples quanto pular uma linha e continuar escrevendo na linha de baixo.  

// O markdown permite que você pule linhas para organizar seu texto no editor, então 
// ele ignora essas **quebras de linha** e considera tudo como o mesmo parágrafo.

// Para pular uma linha use 2 ou mais espaços no final da linha e continue escrevendo 
// na linha de baixo.

// \`\`\`md 
// meu texto_ _        <- dois espaços
// que continua na linha de baixo.
// \`\`\`
// ## Quer aprender mais

// Esse guia foi apenas o básico para começar a escrever em markdown. Ainda tem muitas 
// coisas que não apareceram nesse guia, como listas, citações, blocos de código, 
// links, imagens e muito mais.

// Quer aprender mais sobre **Markdown**? comece por esses links:

// - [O que é Markdown](https://markdown.net.br/)
// - [Como escrever Markdown](https://markdown.net.br/sintaxe-basica/))`),

//     new Post(3, 3, new Date(), [ getTags()[2] ], 'Calydon manebat', 
// `## Calydon manebat at dixit

// Lorem markdownum adspicit neque imagine iunxit nobis. Error doluit non,
// cunctisque ponti respicio figuras lumen: hoc *unxit* feri, qua et et aut. Ire
// deserere male gravis liliaque et vultus, non voces animos *et*. Locutus fretum
// pingues sumus Iuppiter celebrabere hospita commendat nymphae: utile vota,
// [experientia tuetur](http://ultoris-rigescunt.com/tu) concitat fallebat abest
// tempestivus monstra. Quoque annua, et Rhoetus secretaque prosunt pectore fecerit
// adimam dura corpus, glaebis adest.

// 1. Ruricolae nitidis Panchaeaque videre carus nunc Byblis
// 2. In cornua tempora veniebat furibundus sorores fera
// 3. Hebeti sublato quondam
// 4. Nec notissima tamen inguine silentia
// 5. Lelegeia notissima culpam pacis
// 6. Iove usque relaxant iugalibus sub diu`),

//     new Post(4, 3, new Date(), [ getTags()[0] ], 'Duo Sigei sit peterem', 
// `Duo Sigei sit peterem auras *onerique* copia hac praesente totis saucia est
// corpore vestrae. Melanthus et columque *consuetas loqui*, nitidis in deserti
// vicem. Deo pro, cum ferat successit Phrygiae animasque cum tardos *cum*, mala
// leviter videre et? Et studiis patefecit, superis velociter patriisque auceps,
// nec Turni? Mores [perque optandi me](http://www.moriens.io/) crista tegmine:
// [Aesonides usquam](http://generisque.org/prolesqueeras) vitae, una flore furens
// emicuit mea *Acmon* terraeque hostis.

// Tulit pecudesque imagine ac sibi titulum habet, mittor et semper rubra carpe
// visus ducere, est Minos? Amazone possit, quo adacto, sunt tardatus voce, est. Te
// redit Hector quem praefixo, de est postquam claviger:
// [timor](http://letum.org/). Timorem scelerataque fecit meminitque **narres**,
// erat tune: via proles tellure stipe quaque vincla cupit properamus. Longumque
// gravet ictus iam mutatus cura eodem gemini: nunc denique!`), 

//     new Post(5, 2, new Date(), [ getTags()[1] ], 'Tractare cum cernes', 
// `## Tractare cum cernes aut coniuge formas

// Artis draconi, telum quae sede gaudet fecit corripe, dat. Rigent vite.

// > Vitarit de tempora signumque, frutices quid, sua navita pariterque amore.
// > Curvantur culpavit nunc falsa Hac Sicanias auro, Minervae teneas actis patens
// > in utque flores orbe amori sub.

// Fraterni precibus. Inbellemque inmiti ales fruges *adopertaque solent
// fefellimus* aequora Anaxareten subiere movit instar, quisve canis; **caedis**, ora.`),

//     new Post(6, 1, new Date(), [ getTags()[2] ], 'Gradus idemque quadriiugi', 
// `Gradus idemque quadriiugi funus temptare sentiri delphines sinunt agros stare
// coniugis maternas lucem plangoremque *nescia*. Femina equi modo habet! Edere
// viseret: maiora luget succedere sibi, diu mitis quae utilis at.

// Clara murice abit, frondere palmis [saucius induta
// torique](http://gloriacorpore.com/) nunc. Placuere arcus contingere reppulit
// inque accessisse fronti traxit accessus; umor equo texique suppositosque inde
// praestantior dedit formaque. Iuvenum nec ubi gratissime priora Romulus in neve
// seroque colorque, arva colores resoluta sensi. Saturnia terra senserit ursaque
// hoc truncos, tu spissisque Liber absolvere? Fratrum ingemuere mater ponit
// *armenta*, quam exierant: [sed iam](http://quo-causamque.net/) stupuitque plena
// multarum genis corripitur quam liquefaciunt praemia ille.`),

//     new Post(7, 1, new Date(), [ getTags()[0] ], 'Te prius videntur', 
// `## Te prius videntur index mercurio pietas videri

// Lorem markdownum quae paelex meque volucrem et cuncta placidum Chromis! Est
// murice **femina** suos nondum, illa indignantem *haec* visa, meorum. Guttur
// more, quo missa pennis dea prece quodsi eundo viri **omnes satis** temptabat,
// se.

// - Ultima iniectos Morphea
// - Tum pater me pinuque vittis ludit est
// - Metuam laudatis vertice ex et ille longius
// - Gremio inplicuit inundet rapta tua manifesta et
// - Coniunx ora Veneris suum`), 

//     new Post(8, 3, new Date(), [ getTags()[1] ], 'Iuppiter sic flere', 
// `## Iuppiter sic flere

// De pondere voluisse inspicitur Iuno, edere nimbos harena? Glaebis per, spiris
// Iove: errare fraterque et missa vincula? De cum Thyesteis **rectior** inque
// namque, manus, contempto tamen, ne altera ratus! Mea est arvo nequiquam angues
// pietas percussis motisque si caelo e Cicones, adfert. Pectore altam talia,
// laniataque excipit fecit.

// Inpius animos! Ultra loca, nemorosi deae fatus axis lene Pyramus mota pectusque
// ruitque fidem, loca, ferox forte, mille. Nefandas videt; loca magis, meo cum
// induitur fabrae laesit patiar; ecce.`),

//     new Post(9, 2, new Date(), [ getTags()[2] ], 'Pro huius abunde', 
// `## Pro huius abunde arboris tecta tenebras melior

// Quid illo genitus Saturnius aegro [est tua](#non), mersit tamen eiectatamque
// fluctus paulum matris, radiante. Athamas nec cui feliciter molimine [celebrant
// nondum](#qui) cornum *parva*, pallentemque *pompae ut Noricus* transit [et
// Minyis reddique](#pacis) membra.
// \`\`\`ts
//     if (-2 - market) {
//         processorGraphic.waveBoolean = lion(consoleGpu);
//         powerpointText(floatingSpriteGate + whiteTypefaceParallel);
//         disk = dotXslt(device, exabyte_burn_markup(intranetTextDesktop, text,
//                 mp_uri_publishing));
//     }
//     vdslHalftoneThroughput.ajaxDvMamp = cookie_registry_time(keylogger(voip -
//             art, motion_kbps, dram_frequency_floating), barSimplexDevice);
//     if (resolutionPpm(right, array, plain_vector) == user) {
//         gui_mtu.ftp = 3;
//         rosetta_cifs(computer(powerpoint_host, -2), expansion_pup, 1 * 4);
//     } else {
//         southbridge_syn_leopard(bespokeInternet, -1, raw_ctr_exif);
//         font(left_scareware_perl, tabletLeopardHeap, aluDefaultOspf);
//     }
//     hdd_mbr_ram += 22 * -3 + 4 / batch_commerce_zebibyte;
// \`\`\`

// Hippodamen sudore, illa nec undis parenti iam: ungues humus, Pandiona medio
// pensaque quae: amet. Extremum bello liquidum, quid gestu ramos, belua montibus.
// Cum et superos superabit Erinys doctae ducunt, sub et dixisse miles Hecabesque
// depressitque iussus luco. Generis curvi prensis et duos, parvis ventos.`),
// ];
*/

/** @returns {Post[]} */
export const getPosts = async () => {
    try {
        const response = await axios.get(urlAPI + '/postagens/');
        return response.data.map(postData => {
            return createPostFromDatabase(postData);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar postagens. erro: ${err}`);
        return [];
    }
}

/** 
 * @param {Number[]} tagIDs 
 * @returns {Post[]} */
export const getPostsByTagID = async (tagIDs) => {
    try {
        const response = await axios.get(urlAPI + `/postagens/filter?withTag=${tagIDs.join(',')}`);
        return response.data.map(postData => {
            return createPostFromDatabase(postData);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar postagem por id. erro: ${err}`);
        return null;
    }
}

export const getPostsSync = async (onGetPosts) => {
    const posts = await getPosts();
    onGetPosts(posts);
}

export const getPostByID = async (id) => {
    try {
        const posts = await getPosts();
        return posts.find(post => post.id === id) || null;
    }
    catch (err) {
        console.error(`Erro ao buscar postagem por id. erro: ${err}`);
        return null;
    }
}; 

export const getPostsByUserID = async (userID) => {
    try {
        const response = await axios.get(urlAPI + `/postagens/user?userID=${userID}`);
        return response.data.map(postData => {
            return createPostFromDatabase(postData);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar postagem por id do usuário. erro: ${err}`);
        return null;
    }    
};

export const getPostsFixados = async () => {
    try {
        const posts = await getPosts();
        return posts.filter(post => post.isFixed);
    }
    catch (err) {
        console.error(`Erro ao buscar postagem por id do usuário. erro: ${err}`);
        return null;
    }    
}

export const createPost = async (userID, title, content, tags) => {
    try {
        const response = await axios.post(urlAPI + `/postagens`, {
            userID: userID,
            title: title,
            content: content,
        });

        console.log(`criando post para o usuário ${userID}. ${title}, ${tags.map(x => x.name)}`);

        const postID = response.data.postID;

        await Promise.all(tags.map(async (tag) => {
            console.log(`criando tags ${tag.id}${tag.name} para post ${postID}`);
            const r = await axios.post(urlAPI + `/post-tags`, {
                tagID: tag.id,
                postID: postID,
            });
            return r.data;
        }));
        
    } catch (err) {
        console.error(`Erro ao criar postagens. erro: ${err}`);
    }
    
};