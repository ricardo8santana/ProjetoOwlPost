export class User {
    constructor(id, username, email, password, profilePicture) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

/* 
    Por enquanto retorna um usuário de teste, a ideia é trazer as informações do usuário
    direto do banco de dados.
*/

const users = [
    new User(0, 'Megumin OwO', 'owo@email.com', '123', 'https://i.pinimg.com/originals/19/f2/d7/19f2d715f757d452e9ba3cc3083e6fb9.jpg'),
    new User(1, 'Megumin UwU', 'uwu@email.com', '123', 'https://i.pinimg.com/736x/1a/d6/f5/1ad6f55ddd058398686b1955a17b0e5b.jpg'),
    new User(2, 'Megumin O.O', 'o.o@email.com', '123', 'https://external-preview.redd.it/y8qoGJqG01NycBBa-_6ZycBKdVA-Oqqb8OSYpSRHhpM.png?width=640&crop=smart&auto=webp&s=d9a217dd9455cb7d26dee7bf4970a0f33bc0b945'),
];

let loggedUser = undefined;

export const getUser = (id) => {
    return users.find(user => user.id == id);
};

export const createUser = (username, email, password) => {
    const user = new User(users.length, username, email, password, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F184%2F184064.jpg&f=1&nofb=1&ipt=4d6add8cafb02053664146794476bf3728dc6d0935d69869334bcc9f95b07b10&ipo=images');
    users.push(user);
};

export const isLoggedIn = () => getLoggedUser() !== undefined;
export const getLoggedUser = () => JSON.parse(localStorage.getItem('logged-user'));

const onUserLogout = new Event('user-logout');
const onUserLogin = new Event('user-login');

export const login = (email, password) => {
    loggedUser = users.find(user => user.email == email && user.password == password);
    localStorage.setItem('logged-user', JSON.stringify(loggedUser));
    window.dispatchEvent(onUserLogin);
    return loggedUser;
}

export const logout = () => {
    loggedUser = undefined;
    localStorage.removeItem('logged-user');
    window.dispatchEvent(onUserLogout);
}

export const debugGetRandomUser = () => {
    return users[Math.floor(Math.random() * users.length)];
};