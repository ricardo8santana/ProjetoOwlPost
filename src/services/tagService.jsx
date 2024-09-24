import axios from 'axios';
import { urlAPI } from './apiConnection';

export class Tag {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};

/*
    Por enquanto retorna algumas tags de teste, a ideia é trazer as tags direto
    do banco de dados.
*/

// export const createTag = () => {};
// export const getTagByName = () => {};

// export const getTags = () => {
//     return [
//         new Tag(1, "Animes"),
//         new Tag(2, "Aulas"),
//         new Tag(3, "Alunos"),
//         new Tag(4, "Professores")
//     ];
// }

export const getTags = async () => {
    try {
        const response = await axios.get(urlAPI + `/tags/`);
        return response.data.map(({id, nome}) => {
            return new Tag(id, nome);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar tags. erro: ${err}`);
        return [];
    }
}

export const getTagsSync = async (onGetTags) => {
    const tags = await getTags();
    onGetTags([...[new Tag(0, 'Nenhum')], ...tags]);
}

export const getTagsByPostID = async (postID) => {
    try {
        const response = await axios.get(urlAPI + `/tags/${postID}`);
        return response.data.map(({id, nome}) => {
            return new Tag(id, nome);
        });
    }
    catch (err) {
        console.error(`Erro ao buscar tags de uma postagem. erro: ${err}`);
        return [];
    }
}

export const getTagsByPostIDSync = async (postID, onGetTags) => {
    const tags = await getTagsByPostID(postID);
    onGetTags(tags);
}