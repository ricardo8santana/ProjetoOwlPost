import MDEditor from '@uiw/react-md-editor';
import * as postService from '../services/postService'

import './PostViewPage.css'
import PostCard from '../components/PostCard';
import { Dropdown, DropdownMenu, DropdownButton, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import { useState } from 'react';
import React from 'react';

const getResumeFromContent = (content, useCompact, includeTitles, maxLength) => {
    const removeImagePattern = /!\[.*\](.*)/g;
    const removeHeaderPattern = /^#{1,6} [a-zA-Z ]*\n/gm;
    const removeDividerPattern = /^\_{3}\n/gm;
    const removeSpacingPattern = /^\n/gm;
    const removeBlockQuotesPattern = /^>.*\n/gm;
    const removeListPattern = /- .*\n/gm;

    if (includeTitles) {
        const titlePattern = /^[#]{1,6}\s+(.*\n)/gm;
        content = content.replace(titlePattern, '$1');
    }

    const textOnlyPattern = /^[a-zA-Z#].*\n/gm;
    const matches = content.matchAll(textOnlyPattern);

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
                    className="mx-3 my-2 w-auto"
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
        <>
            <h2>Nenhum post ainda, volte mais tarde</h2>
        </>
    )
};

const tags = [
    'Nenhum',
    'Anime',
    'Aulas',
];

const orders = [
    'Padrão',
    'Mais Recente',
    'Mais Popular',
];

const PostViewList = ({ posts }) => {
    const [filtro, setFiltro] = useState(tags[0]);
    const [order, setOrder] = useState(orders[0]);

    return (
        <div className='post-view'>
            <div className='post-view-filters'>
                <div className='post-view-filter left'>
                    <span>Filtrar</span>
                    <Dropdown onSelect={e => setFiltro(e)}>
                        <Dropdown.Toggle id="dropdown-custom-components">{filtro}</Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu} onSelect={e => console.log(e)} >
                        {
                            tags.map(tag => <Dropdown.Item eventKey={tag}>{tag}</Dropdown.Item>)
                        }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='post-view-search'>
                    <input type='text' placeholder='Pesquisar'/>
                </div>
                <div className='post-view-filter right'>
                    <span>Ordenar</span>
                    <Dropdown onSelect={e => setOrder(e)}>
                        <Dropdown.Toggle id="dropdown-custom-components">{order}</Dropdown.Toggle>
                        <Dropdown.Menu as={CustomMenu} >
                        {
                            orders.map(order => <Dropdown.Item eventKey={order}>{order}</Dropdown.Item>)
                        }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {
                posts.map(post =>
                    <PostCard title={post.title} source={getResumeFromContent(post.content, true, true, 450)} />
                )
            }
            <Button>Carregar Mais</Button>
        </div>
    )
};

const PostViewPage = () => {
    const posts = postService.getPosts();

    return (
        <>
            {
                posts.length === 0
                    ? <PostViewEmpty />
                    : <PostViewList posts={posts} />
            }
        </>
    );
};

export default PostViewPage;