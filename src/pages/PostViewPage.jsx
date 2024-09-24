import './PostViewPage.css'

import {
    Form,
    Dropdown,
    DropdownMenu,
    DropdownButton,
    Button,
    Spinner
} from 'react-bootstrap';

import { faArrowDownShortWide, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import React from 'react';

import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';

import * as postService from '../services/postService';
import * as tagService from '../services/tagService';

import { Link } from 'react-router-dom';
import { getTags } from '../services/tagService';
import Footer from '../components/Footer';

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-100"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const PostViewEmpty = () => {
    return (
        <Spinner animation='border' variant='primary'/>
        // <>
        //     <h2>Nenhum post ainda, volte mais tarde</h2>
        // </>
    )
};

// const tags = [
//     'Nenhum',
//     'Anime',
//     'Aulas',
// ];

const orders = [
    'Padrão',
    'Recente',
    'Popular',
];

const PostViewList = () => {

    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);
    const [filtro, setFiltro] = useState({ id: 0, name: 'Nenhum' });
    const [order, setOrder] = useState(orders[0]);

    useEffect(() => {
        postService.getPostsSync(posts => setPosts(posts));
        tagService.getTagsSync(tags => setTags(tags));
    }, []);

    useEffect(() => {


    }, [filtro])

    const handleFilterSelected = (selected) => {
        const getFilteredPost = async () => {
            const posts = await postService.getPostsByTagID([filtro.id === 0 ? null : filtro.id]);
            setPosts(posts);
        }

        getFilteredPost();
    }

    return (
        <>
            <div className='post-view'>
                <div className='post-view-filters'>
                    <div className='post-view-filter left'>
                        {/* <span>Filtrar</span> */}
                        <FontAwesomeIcon icon={faFilter} />
                        <Dropdown onSelect={handleFilterSelected}>
                            <Dropdown.Toggle id="dropdown-custom-components">
                                <FontAwesomeIcon icon={faFilter} />
                                <span className='icon-filters'>{filtro.name}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as={CustomMenu} onSelect={e => console.log(e)} >
                                {
                                    tags.map(tag =>
                                        <Dropdown.Item eventKey={tag.id}>{tag.name}</Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='post-view-search'>
                        <input type='text' placeholder='Pesquisar' />
                    </div>
                    <div className='post-view-filter right'>
                        {/* <span>Ordenar</span> */}
                        <Dropdown onSelect={e => setOrder(e)}>
                        <Dropdown.Toggle id="dropdown-custom-components"><FontAwesomeIcon icon={faArrowDownShortWide} /><span className='icon-filters'>{order}</span></Dropdown.Toggle>
                            <Dropdown.Menu >
                                {
                                    orders.map(order => <Dropdown.Item eventKey={order}>{order}</Dropdown.Item>)
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className='post-view-options'>
                    <Link className='btn-owl btn-create' to='/editor/0'>Criar Post</Link>
                </div>
                {
                    posts.map(post =>
                        <PostCard key={post.id} post={post} />
                    )
                }
                {/* <input type='button' className='btn-owl btn-load' value='Carregar Mais' /> */}
                <Button variant='owl'>Carregar Mais</Button>
            </div>
            <Footer />
        </>
    )
};

const PostViewPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPostsSync(posts => setPosts(posts));
    }, []);

    return (
        <>
            <Navbar />
            {
                posts.length === 0
                    ? <PostViewEmpty />
                    : <PostViewList posts={posts} />
            }
        </>
    );
};

export default PostViewPage;