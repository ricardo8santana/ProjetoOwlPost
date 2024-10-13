import axios from 'axios';

import { urlAPI } from './apiConnection';
import * as tagService from './tagService';
import { title } from '@uiw/react-md-editor';

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
};


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
        const response = await axios.get(urlAPI + `/postagens?ids=${id}`);
        return createPostFromDatabase(response.data[0]);
        // return posts.find(post => post.id === id) || null;
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

        return postID;
        
    } catch (err) {
        console.error(`Erro ao criar postagem. erro: ${err}`);
        return 0;
    }
};

export const updatePost = async (postID, title, content) => {
    try {
        console.log(`atualizando o post ${postID} ${title}`);
        await axios.patch(urlAPI + '/postagens/', {
            postID: postID,
            title: title,
            content: content,
        });
    } catch (err) {
        console.error(`Erro ao atualizar postagem. erro: ${err}`);
    }
};

export const pinPost = async (postID, isPinned) => {
    try {
        await axios.patch(urlAPI + '/postagens/pin', {
            postID: postID,
            isPinned: isPinned,
        });
    } catch (err) {
        console.error(`Erro ao atualizar postagem. erro: ${err}`);
    }
}

export const deletePost = async (postID) => {
    try {
        await axios.delete(urlAPI + '/postagens/' + postID);
    } catch (err) {
        console.error(`Erro ao deletar postagem. erro: ${err}`);
    }
}

export const getFilteredPosts = async (tag, search, order) => {
    try {
        const query = [];
        if (tag && tag.id != 0) { 
            query.push('withTags=' + tag.id); 
        }
        
        if (search && search !== '') { 
            query.push('search=' + search); 
        }

        if (order) { 
            const o = order !== 'oldest' ? 'desc' : 'asc';
            query.push('orderBy=ultimaAtividade&sort=' + o); 
        }

        const response = await axios.get(urlAPI + '/postagens/filter?' + query.join('&'));
        return response.data.map(postData => {
            return createPostFromDatabase(postData);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar postagem. erro: ${err}`);
        return [];
    }
}

/** @param {String} content @param {Boolean} useCompact @param {Boolean} includeTitles @param {Number} maxLength @returns {String}*/
export const getResumeFromContent = (content, useCompact, includeTitles, maxLength) => {
    const lines = content.split('\n');
    
    const result = lines.map(line => {
        if (line.match(/^[ a-z\u00df-\u00ff]/i)) {
            const result = `${line}${useCompact ? ' ' : '\n'}`;
            return result;
        }

        // if (includeTitles && line.match(/^[ #]+/i)) {
        //     const result = line.replace(/^[#]{1,6}\s+(.*\n)/i, /$1/);
        //     return result.trim() + '\n'
        // }

        return;
    });
    
    return result.join('').substring(0, maxLength);
};