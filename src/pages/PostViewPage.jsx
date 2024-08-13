import MDEditor from '@uiw/react-md-editor';
import * as postService from '../services/postService'

const getResumeFromContent = (content, useCompact, maxLength) => {
    const removeImagePattern = /!\[.*\](.*)/g;
    const removeHeaderPattern = /^#{1,6} [a-zA-Z ]*\n/gm;
    const removeDividerPattern = /^\_{3}\n/gm;
    const removeSpacingPattern = /^\n/gm;
    const removeBlockQuotesPattern = /^>.*\n/gm;
    const removeListPattern = /- .*\n/gm;

    const textOnlyPattern = /^[a-zA-Z#].*\n/gm;
    const matches = content
        .replace(/^[#]{1,6}\s+(.*\n)/gm, '$1')
        .matchAll(textOnlyPattern);

    /** @type {String} */
    let resume = '';
    for (const match of matches) {
        if (match.index !== 0 && !useCompact)
            resume += '\n';
        
        resume += match;
    }
    // matches.forEach(match => resume += match);

    // let resume = content
    //     .replace(removeImagePattern, '')
    //     .replace(removeHeaderPattern, '')
    //     .replace(removeDividerPattern, '')
    //     .replace(removeSpacingPattern, '')
    //     .replace(removeBlockQuotes);

    return resume.substring(0, maxLength);
};

const PostViewEmpty = () => {
    return(
        <>
            <h2>Nenhum post ainda, volte mais tarde</h2>
        </>
    )
};

const PostViewList = ({posts}) => {
    return(
        <div>
        {
            posts.map(post => 
                <div className=''>
                    <h1>{post.title}</h1>
                    <MDEditor.Markdown source={getResumeFromContent(post.content, false, 450)} />
                </div>
            )
        }        
        </div>
    )
};

const PostViewPage = () => {
    const posts = postService.getPosts();

    return(
        <>
        { 
            posts.length === 0 
                ? <PostViewEmpty/>
                : <PostViewList posts={posts} />
        }
        </>
    );
};

export default PostViewPage;