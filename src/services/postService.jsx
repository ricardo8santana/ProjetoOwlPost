import { User, getUser } from './userService';
import { Tag, getTags } from './tagService';

const POST_STORAGE_KEY = 'posts';

export class Post {
    /**
     * @param {User} user O usuário que está criando a postagem.
     * @param {String} title O título da postagem.
     * @param {String} content O conteúdo em Markdown da postagem.
     * @param {Date} date A data da criação/edição da postagem.
     */
    constructor(user, title, content, date, tags) {
        /** @type {User} */
        this.user = user;
        /** @type {String} */
        this.title = title;
        /** @type {String} */
        this.content = content;
        /** @type {Date} */
        this.date = date; 
        /** @type {Tag[]} */
        this.tags = tags;
    }
}

/** @returns {Post[]} Retorn uma lista com todas as postagems salvas no banco de dados */
export const getPosts = () => {
    return JSON.parse(localStorage.getItem(POST_STORAGE_KEY)) || [];
}

/** @param {Post[]} posts a lista de postagems para ser salva  */
const setPosts = (posts) => {
    localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(posts));
}

/** Tenta criar uma nova postagem no banco de dados.
 * @param {Post} post o postagem a ser criado no banco.
 * @returns Retorna true se bem sucedido ou false se existir uma postagem com o mesmo id.
*/
export const createPost = (post) => {
    const posts = getPosts();
    // todo: Filtrar pelo ID do usuario alem do título.
    const targetPost = posts.find(p => p.title === post.title);
    if (targetPost) {
        return false;
    }

    posts.push(post);
    setPosts(posts);
    return true;
}

/** Tenta atualizar um post no banco de dados.
 * @param {Post} post a postagem com o conteúdo e título atualizado.
 * @returns Retorna true se bem sucedido ou false se não houver uma postagem para atualizar.
*/
export const updatePost = (post) => {
    const posts = getPosts();
    // todo: Filtrar pelo ID do usuario alem do título.
    const targetPost = posts.find(p => p.title === post.title);
    if (!targetPost) {
        return false;
    }

    targetPost.content = post.content;
    setPosts(posts);
    return true;
}

/** Tenta atualizar um post, se não conseguir tenta criar uma nova postagem  no banco de dados.
 * @param {Post} post a postagem com o conteúdo e título atualizado.
 * @returns Retorna true se bem sucedido ou false se acontecer algum erro.
*/
export const createOrUpdatePost = (post) => {
    if (!updatePost(post)) {
        return createPost(post);
    }

    console.error(`Não foi possível encontrado ou criar um post com o titulo ${post.title}`);
    return false;
}

/** Tenta deletar um post do banco de dados.
 * @param {Post} post a postagem a ser deletada.
 * @returns Retorna true se bem sucedido ou false se não houver uma postagem para deletar.
*/
export const deletePost = (post) => {
    const posts = getPosts();

    const postIndex = posts.indexOf(post);
    if (postIndex === -1) {
        return false;
    }

    posts.splice(postIndex, 1);
    setPosts(posts);
    return true;
}

export const getDummyPosts = () => {
    const user = getUser();
    const tag = getTags()[0];
    const date = new Date();

    const content_01 = 'Lorem markdownum, nocebit montibus viscera, erat, mihi sisto, manet. Dura fratres, balatus pater: *Cypriae* nunc collo ora mollibat metuam si memores occiderat, pyropo. Quem usus ostia negarunt, ista artus formasque si sequitur animi fideque stetimus. Inerant pervigil fronti traderet Iunone haec tollensture detulit tempore, mihi, lucem tulit, crinales.';
    const content_02 = 'Sagax [contingere soceri](#propior-sed). **Fuerant** barbaricoque habent condiderant non conspecta [celatos deterruit ut](#non) stabat custos vocari flamma olivae sed parvoque nymphae o atris?';
    const content_03 = 'Astu velit, despectabat terris optima [trepidare](#et-namque-turbine) ferox feres Lucifero sine foribus sanguisque, mare est et levi succedere, mane? Timendi prope, valent nec pereat curvamine **procis**, et.';

    return [
        new Post(user, 'Markdown 01', content_01, date, [ tag ]), 
        new Post(user, 'Markdown 02', content_02, date, [ tag ]), 
        new Post(user, 'Markdown 03', content_03, date, [ tag ])];
}