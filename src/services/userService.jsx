export class User {
    constructor(id, username, profilePicture) {
        this.id = id;
        this.username = username;
        this.profilePicture = profilePicture;
    }
}

/* 
    Por enquanto retorna um usuário de teste, a ideia é trazer as informações do usuário
    direto do banco de dados.
*/

const user = [
    new User(0, 'Megumin OwO', 'https://i.pinimg.com/originals/19/f2/d7/19f2d715f757d452e9ba3cc3083e6fb9.jpg'),
    new User(1, 'Megumin UwU', 'https://i.pinimg.com/736x/1a/d6/f5/1ad6f55ddd058398686b1955a17b0e5b.jpg'),
    new User(2, 'Megumin O.O', 'https://external-preview.redd.it/y8qoGJqG01NycBBa-_6ZycBKdVA-Oqqb8OSYpSRHhpM.png?width=640&crop=smart&auto=webp&s=d9a217dd9455cb7d26dee7bf4970a0f33bc0b945'),
];

export const getUser = (id) => {
    return user.find(user => user.id == id);
};

export const debugGetRandomUser = () => {
    return user[Math.floor(Math.random() * user.length)];
}