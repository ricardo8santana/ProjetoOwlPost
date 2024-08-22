export class Tag {
    constructor(name) {
        this.name = name;
    }
}

/*
    Por enquanto retorna algumas tags de teste, a ideia é trazer as tags direto
    do banco de dados.
*/

// export const createTag = () => {};
// export const getTagByName = () => {};

export const getTags = () => {
    return [
        new Tag("Animes"),
        new Tag("Aulas"),
        new Tag("Alunos"),
        new Tag("Professores")
    ];
}