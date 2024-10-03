import { getTags } from './tagService';


export class Post {
    constructor(userID, date, tags, title, content) {
        this.userID = userID;
        this.date = date; 
        this.tags = tags;
        this.title = title;
        this.content = content;
    }
}

const posts = [
    new Post(1, new Date(), [ getTags()[0] ], 'Markdown 01', 'Lorem markdownum, nocebit montibus viscera, erat, mihi sisto, manet. Dura fratres, balatus pater: *Cypriae* nunc collo ora mollibat metuam si memores occiderat, pyropo.'), 
    new Post(2, new Date(), [ getTags()[1] ], 'Markdown 02', 'Sagax [contingere soceri](#propior-sed). **Fuerant** barbaricoque habent condiderant non conspecta [celatos deterruit ut](#non) stabat custos vocari flamma olivae sed parvoque nymphae o atris?'),
    new Post(3, new Date(), [ getTags()[2] ], 'Markdown 03', 'Astu velit, despectabat terris optima [trepidare](#et-namque-turbine) ferox feres Lucifero sine foribus sanguisque, mare est et levi succedere, mane? Timendi prope, valent nec pereat curvamine **procis**, et.'),
    new Post(3, new Date(), [ getTags()[0] ], 'Markdown 01', 'Lorem markdownum, nocebit montibus viscera, erat, mihi sisto, manet. Dura fratres, balatus pater: *Cypriae* nunc collo ora mollibat metuam si memores occiderat, pyropo.'), 
    new Post(2, new Date(), [ getTags()[1] ], 'Markdown 02', 'Sagax [contingere soceri](#propior-sed). **Fuerant** barbaricoque habent condiderant non conspecta [celatos deterruit ut](#non) stabat custos vocari flamma olivae sed parvoque nymphae o atris?'),
    new Post(1, new Date(), [ getTags()[2] ], 'Markdown 03', 'Astu velit, despectabat terris optima [trepidare](#et-namque-turbine) ferox feres Lucifero sine foribus sanguisque, mare est et levi succedere, mane? Timendi prope, valent nec pereat curvamine **procis**, et.'),
    new Post(1, new Date(), [ getTags()[0] ], 'Markdown 01', 'Lorem markdownum, nocebit montibus viscera, erat, mihi sisto, manet. Dura fratres, balatus pater: *Cypriae* nunc collo ora mollibat metuam si memores occiderat, pyropo.'), 
    new Post(3, new Date(), [ getTags()[1] ], 'Markdown 02', 'Sagax [contingere soceri](#propior-sed). **Fuerant** barbaricoque habent condiderant non conspecta [celatos deterruit ut](#non) stabat custos vocari flamma olivae sed parvoque nymphae o atris?'),
    new Post(2, new Date(), [ getTags()[2] ], 'Markdown 03', 'Astu velit, despectabat terris optima [trepidare](#et-namque-turbine) ferox feres Lucifero sine foribus sanguisque, mare est et levi succedere, mane? Timendi prope, valent nec pereat curvamine **procis**, et.'),
];

export const getPosts = () => {
    return posts;
}

export const getPostsByUserID = (userID) => {
    return posts.filter(post => post.userID === userID);
};

export const createPost = (post) => {
    posts.push(post);
};