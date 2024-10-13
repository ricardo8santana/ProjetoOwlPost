import { useEffect, useState } from 'react';
import React from 'react';

import { Form, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { faArrowDownShortWide, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LoadingScreen from '../components/LoadingScreen';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';

import * as postService from '../services/postService';
import * as tagService from '../services/tagService';
import { useDebounce } from 'use-debounce';

import Footer from '../components/Footer';
import './PostViewPage.css'

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


const orders = [
    { id: 'default', display: 'Padrão' },
    { id: 'newest', display: 'Mais Recente' },
    { id: 'oldest', display: 'Mais Antiga' },
];

const EmptyFilter = new tagService.Tag(0, 'Nenhum');

const PostViewList = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);
    const [filtro, setFiltro] = useState(EmptyFilter);
    const [order, setOrder] = useState(orders[0]);
    const [search, setSearch] = useState('');

    const [searchValue] = useDebounce(search, 500);

    const getFilteredPost = async () => {
        const posts = await postService.getFilteredPosts(filtro, searchValue, order.id);
        setPosts(posts);
    }

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);

            const posts = await postService.getPosts();
            setPosts(posts);

            const tags = await tagService.getTags();
            setTags([...[EmptyFilter], ...tags]);

            setIsLoading(false);
        };

        loadData();
    }, []);

    useEffect(() => {
        getFilteredPost();
    }, [filtro, order, searchValue]);

    return (
        <div className='post-view'>
            <div className='post-view-filters'>
                <div className='post-view-filter left'>
                    <Dropdown onSelect={e => setFiltro(tags[e])}>
                        <Dropdown.Toggle id="dropdown-custom-components">
                            <FontAwesomeIcon icon={faFilter} />
                            <span className='icon-filters'>{filtro.name}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu}>
                            {
                                tags.map((tag, index) =>
                                    <Dropdown.Item key={index} eventKey={index}>{tag.name}</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='post-view-search'>
                    <input type='text' placeholder='Pesquisar' onChange={e => setSearch(e.target.value)} />
                </div>
                <div className='post-view-filter right'>
                    {/* <span>Ordenar</span> */}
                    <Dropdown onSelect={e => setOrder(orders[e])}>
                        <Dropdown.Toggle id="dropdown-custom-components"><FontAwesomeIcon icon={faArrowDownShortWide} /><span className='icon-filters'>{order.display}</span></Dropdown.Toggle>
                        <Dropdown.Menu >
                            {
                                orders.map((order, index) =>
                                    <Dropdown.Item key={index} eventKey={index}>{order.display}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='post-view-options'>
                <Link className='btn-owl btn-create' to='/editor/0'>Criar Post</Link>
            </div>
            {
                isLoading
                    ? <LoadingScreen />
                    : posts.map(post =>
                        <PostCard key={post.id} post={post} />
                    )
            }
            {/* <Button variant='owl'>Carregar Mais</Button> */}
        </div>
    )
};

const PostViewPage = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.getPostsSync(posts => setPosts(posts));
    }, []);

    return (
        <div className='posts-page'>
            <Navbar />
            {
                posts === null
                    ? <LoadingScreen />
                    : <PostViewList posts={posts} />
            }
            <Footer />
        </div>
    );
};

export default PostViewPage;