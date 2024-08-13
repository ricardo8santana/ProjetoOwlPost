const PostsSessionKey = 'posts';

export const createPost = (post) => {
    /** @type {String[]} */
    const posts = JSON.parse(sessionStorage.getItem(PostsSessionKey)) || [];

    const searchPost = posts.find(element => element.title === post.title);
    if (searchPost) {
        return false;
    }

    posts.push(post);
    sessionStorage.setItem(PostsSessionKey, JSON.stringify(posts));
    return true;
}

export const updatePost = (post) => {
    const posts = JSON.parse(sessionStorage.getItem(PostsSessionKey)) || [];
    let searchPost = posts.find(element => element.title === post.title);
    
    if (!searchPost) {
        return false;
    }

    searchPost.content = post.content;
    sessionStorage.setItem(PostsSessionKey, JSON.stringify(posts));
    return true;
}

export const createOrUpdatePost = (post) => {
    if (!updatePost(post)) {
        return createPost(post);
    }

    console.error(`Não foi possível encontrado ou criar um post com o titulo ${post.title}`);
    return false;
}

export const getPosts = () => {
    return JSON.parse(sessionStorage.getItem(PostsSessionKey)) || [];
}