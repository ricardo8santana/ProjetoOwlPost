import { Link } from "react-router-dom";

import defaultCardImage from '../assets/images/carousel_0.jpg';

import './DestaqueCard.css';

const DestaqueCard = ({ slide }) => {
    const to = slide.to !== undefined ? slide.to : '';
    const openNewTab = slide.openNewTab !== undefined ? slide.openNewTab : false;
    const titulo = slide.titulo !== undefined ? slide.titulo : ''; 
    const descricao = slide.descricao !== undefined ? slide.descricao : ''; 

    return (
        <Link to={to} target={openNewTab ? "_blank" : "_self" } 
            rel={openNewTab ? 'noopener noreferrer' : ''} 
            className="destaque-card">
            <h5 className='destaque-title'>{titulo}</h5>
            <span className='destaque-desc'>{descricao}</span>
        </Link>
    );
};

const DestaqueSlideCard = ({ slide }) => {
    const to = slide.to !== undefined ? slide.to : '';
    const titulo = slide.titulo !== undefined ? slide.titulo : ''; 
    const openNewTab = slide.openNewTab !== undefined ? slide.openNewTab : false;
    const descricao = slide.descricao !== undefined ? slide.descricao : ''; 
    const imagem = slide.imagem !== undefined ? slide.imagem : defaultCardImage;

    return (
        <Link to={to} 
            target={openNewTab ? "_blank" : "_self" } 
            rel={openNewTab ? 'noopener noreferrer' : ''} 
            className="destaque-slide-card">
                
            <img className='destaque-slide-image' src={imagem} />
            <h5 className='destaque-title'>{titulo}</h5>
            <span className='destaque-desc'>{descricao}</span>
        </Link>
    );
};

export {
    DestaqueCard,
    DestaqueSlideCard,
};