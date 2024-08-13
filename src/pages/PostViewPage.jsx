import MDEditor from '@uiw/react-md-editor';
import * as postService from '../services/postService'

const PostViewPage = () => {
    const posts = postService.getPosts();

    return(
        <div>
        {
            posts.map(post => 
            <div className=''>
                <h1>{post.title}</h1>
                <MDEditor.Markdown source={post.content} />
            </div>)
        }        
        </div>
    )
};

export default PostViewPage;