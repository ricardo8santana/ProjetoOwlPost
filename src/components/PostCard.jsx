import MDEditor from '@uiw/react-md-editor';
import './PostCard.css';

const PostCard = ({title, source}) => {
    return (
        <div className='post-card'>
            <div className='post-card-author'>
                <div className='profile-picture'>
                    <img src='https://i.pinimg.com/originals/19/f2/d7/19f2d715f757d452e9ba3cc3083e6fb9.jpg' width='35px'/>
                </div>
                <div className='post-card-author-info'>
                    <div>
                        <span className='post-card-author-name'>Megumin</span>
                        <span className='post-card-author-time'>3 hr</span>
                    </div>
                    <p className='post-card-author-location'>Postado em Animes</p>
                </div>
            </div>
            <h1>{title}</h1>
            <MDEditor.Markdown source={source} />
        </div>
    )
};

export default PostCard;