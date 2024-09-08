import { getTags } from './tagService';


export class Post {
    constructor(id, userID, date, tags, title, content) {
        this.id = id;
        this.userID = userID;
        this.date = date; 
        this.tags = tags;
        this.title = title;
        this.content = content;
    }
}

const posts = [
    new Post(1, 1, new Date(), [ getTags()[0] ], 'Lorem markdownum adspicit', 
`## Calydon manebat at dixit

Lorem markdownum adspicit neque imagine iunxit nobis. Error doluit non,
cunctisque ponti respicio figuras lumen: hoc *unxit* feri, qua et et aut. Ire
deserere male gravis liliaque et vultus, non voces animos *et*. Locutus fretum
pingues sumus Iuppiter celebrabere hospita commendat nymphae: utile vota,
[experientia tuetur](http://ultoris-rigescunt.com/tu) concitat fallebat abest
tempestivus monstra. Quoque annua, et Rhoetus secretaque prosunt pectore fecerit
adimam dura corpus, glaebis adest.

1. Ruricolae nitidis Panchaeaque videre carus nunc Byblis
2. In cornua tempora veniebat furibundus sorores fera
3. Hebeti sublato quondam
4. Nec notissima tamen inguine silentia
5. Lelegeia notissima culpam pacis
6. Iove usque relaxant iugalibus sub diu`),

    new Post(2, 2, new Date(), [ getTags()[1] ], 'Duo Sigei sit peterem', 
`Duo Sigei sit peterem auras *onerique* copia hac praesente totis saucia est
corpore vestrae. Melanthus et columque *consuetas loqui*, nitidis in deserti
vicem. Deo pro, cum ferat successit Phrygiae animasque cum tardos *cum*, mala
leviter videre et? Et studiis patefecit, superis velociter patriisque auceps,
nec Turni? Mores [perque optandi me](http://www.moriens.io/) crista tegmine:
[Aesonides usquam](http://generisque.org/prolesqueeras) vitae, una flore furens
emicuit mea *Acmon* terraeque hostis.

Tulit pecudesque imagine ac sibi titulum habet, mittor et semper rubra carpe
visus ducere, est Minos? Amazone possit, quo adacto, sunt tardatus voce, est. Te
redit Hector quem praefixo, de est postquam claviger:
[timor](http://letum.org/). Timorem scelerataque fecit meminitque **narres**,
erat tune: via proles tellure stipe quaque vincla cupit properamus. Longumque
gravet ictus iam mutatus cura eodem gemini: nunc denique!`),

    new Post(3, 3, new Date(), [ getTags()[2] ], 'Calydon manebat', 
`## Calydon manebat at dixit

Lorem markdownum adspicit neque imagine iunxit nobis. Error doluit non,
cunctisque ponti respicio figuras lumen: hoc *unxit* feri, qua et et aut. Ire
deserere male gravis liliaque et vultus, non voces animos *et*. Locutus fretum
pingues sumus Iuppiter celebrabere hospita commendat nymphae: utile vota,
[experientia tuetur](http://ultoris-rigescunt.com/tu) concitat fallebat abest
tempestivus monstra. Quoque annua, et Rhoetus secretaque prosunt pectore fecerit
adimam dura corpus, glaebis adest.

1. Ruricolae nitidis Panchaeaque videre carus nunc Byblis
2. In cornua tempora veniebat furibundus sorores fera
3. Hebeti sublato quondam
4. Nec notissima tamen inguine silentia
5. Lelegeia notissima culpam pacis
6. Iove usque relaxant iugalibus sub diu`),

    new Post(4, 3, new Date(), [ getTags()[0] ], 'Duo Sigei sit peterem', 
`Duo Sigei sit peterem auras *onerique* copia hac praesente totis saucia est
corpore vestrae. Melanthus et columque *consuetas loqui*, nitidis in deserti
vicem. Deo pro, cum ferat successit Phrygiae animasque cum tardos *cum*, mala
leviter videre et? Et studiis patefecit, superis velociter patriisque auceps,
nec Turni? Mores [perque optandi me](http://www.moriens.io/) crista tegmine:
[Aesonides usquam](http://generisque.org/prolesqueeras) vitae, una flore furens
emicuit mea *Acmon* terraeque hostis.

Tulit pecudesque imagine ac sibi titulum habet, mittor et semper rubra carpe
visus ducere, est Minos? Amazone possit, quo adacto, sunt tardatus voce, est. Te
redit Hector quem praefixo, de est postquam claviger:
[timor](http://letum.org/). Timorem scelerataque fecit meminitque **narres**,
erat tune: via proles tellure stipe quaque vincla cupit properamus. Longumque
gravet ictus iam mutatus cura eodem gemini: nunc denique!`), 

    new Post(5, 2, new Date(), [ getTags()[1] ], 'Tractare cum cernes', 
`## Tractare cum cernes aut coniuge formas

Artis draconi, telum quae sede gaudet fecit corripe, dat. Rigent vite.

> Vitarit de tempora signumque, frutices quid, sua navita pariterque amore.
> Curvantur culpavit nunc falsa Hac Sicanias auro, Minervae teneas actis patens
> in utque flores orbe amori sub.

Fraterni precibus. Inbellemque inmiti ales fruges *adopertaque solent
fefellimus* aequora Anaxareten subiere movit instar, quisve canis; **caedis**, ora.`),

    new Post(6, 1, new Date(), [ getTags()[2] ], 'Gradus idemque quadriiugi', 
`Gradus idemque quadriiugi funus temptare sentiri delphines sinunt agros stare
coniugis maternas lucem plangoremque *nescia*. Femina equi modo habet! Edere
viseret: maiora luget succedere sibi, diu mitis quae utilis at.

Clara murice abit, frondere palmis [saucius induta
torique](http://gloriacorpore.com/) nunc. Placuere arcus contingere reppulit
inque accessisse fronti traxit accessus; umor equo texique suppositosque inde
praestantior dedit formaque. Iuvenum nec ubi gratissime priora Romulus in neve
seroque colorque, arva colores resoluta sensi. Saturnia terra senserit ursaque
hoc truncos, tu spissisque Liber absolvere? Fratrum ingemuere mater ponit
*armenta*, quam exierant: [sed iam](http://quo-causamque.net/) stupuitque plena
multarum genis corripitur quam liquefaciunt praemia ille.`),

    new Post(7, 1, new Date(), [ getTags()[0] ], 'Te prius videntur', 
`## Te prius videntur index mercurio pietas videri

Lorem markdownum quae paelex meque volucrem et cuncta placidum Chromis! Est
murice **femina** suos nondum, illa indignantem *haec* visa, meorum. Guttur
more, quo missa pennis dea prece quodsi eundo viri **omnes satis** temptabat,
se.

- Ultima iniectos Morphea
- Tum pater me pinuque vittis ludit est
- Metuam laudatis vertice ex et ille longius
- Gremio inplicuit inundet rapta tua manifesta et
- Coniunx ora Veneris suum`), 

    new Post(8, 3, new Date(), [ getTags()[1] ], 'Iuppiter sic flere', 
`## Iuppiter sic flere

De pondere voluisse inspicitur Iuno, edere nimbos harena? Glaebis per, spiris
Iove: errare fraterque et missa vincula? De cum Thyesteis **rectior** inque
namque, manus, contempto tamen, ne altera ratus! Mea est arvo nequiquam angues
pietas percussis motisque si caelo e Cicones, adfert. Pectore altam talia,
laniataque excipit fecit.

Inpius animos! Ultra loca, nemorosi deae fatus axis lene Pyramus mota pectusque
ruitque fidem, loca, ferox forte, mille. Nefandas videt; loca magis, meo cum
induitur fabrae laesit patiar; ecce.`),

    new Post(9, 2, new Date(), [ getTags()[2] ], 'Pro huius abunde', 
`## Pro huius abunde arboris tecta tenebras melior

Quid illo genitus Saturnius aegro [est tua](#non), mersit tamen eiectatamque
fluctus paulum matris, radiante. Athamas nec cui feliciter molimine [celebrant
nondum](#qui) cornum *parva*, pallentemque *pompae ut Noricus* transit [et
Minyis reddique](#pacis) membra.

    if (-2 - market) {
        processorGraphic.waveBoolean = lion(consoleGpu);
        powerpointText(floatingSpriteGate + whiteTypefaceParallel);
        disk = dotXslt(device, exabyte_burn_markup(intranetTextDesktop, text,
                mp_uri_publishing));
    }
    vdslHalftoneThroughput.ajaxDvMamp = cookie_registry_time(keylogger(voip -
            art, motion_kbps, dram_frequency_floating), barSimplexDevice);
    if (resolutionPpm(right, array, plain_vector) == user) {
        gui_mtu.ftp = 3;
        rosetta_cifs(computer(powerpoint_host, -2), expansion_pup, 1 * 4);
    } else {
        southbridge_syn_leopard(bespokeInternet, -1, raw_ctr_exif);
        font(left_scareware_perl, tabletLeopardHeap, aluDefaultOspf);
    }
    hdd_mbr_ram += 22 * -3 + 4 / batch_commerce_zebibyte;

Hippodamen sudore, illa nec undis parenti iam: ungues humus, Pandiona medio
pensaque quae: amet. Extremum bello liquidum, quid gestu ramos, belua montibus.
Cum et superos superabit Erinys doctae ducunt, sub et dixisse miles Hecabesque
depressitque iussus luco. Generis curvi prensis et duos, parvis ventos.`),
];

export const getPosts = () => {
    return posts;
}

export const getPostByID = (id) => {
    return posts.find(post => post.id === id) || null;
}; 

export const getPostsByUserID = (userID) => {
    return posts.filter(post => post.userID === userID);
};

export const createPost = (post) => {
    posts.push(post);
};