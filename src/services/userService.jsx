export class User {
    constructor(username, profilePicture) {
        this.username = username;
        this.profilePicture = profilePicture;
    }
}

/* 
    Por enquanto retorna um usuário de teste, a ideia é trazer as informações do usuário
    direto do banco de dados.
*/

export const getUser = () => {
    return new User('Megumin', 'https://i.pinimg.com/originals/19/f2/d7/19f2d715f757d452e9ba3cc3083e6fb9.jpg');
};