import { Link } from "react-router-dom";

import defaultCardImage from '../assets/images/carousel_0.jpg';

import './DestaqueCard.css';

const DestaqueCard = ({ slide }) => {
    const to = slide ? slide.to : '';
    const titulo = slide ? slide.titulo : ''; 
    const descricao = slide ? slide.descricao : ''; 

    return (
        <Link to={to} className="destaque-card">
            <h5 className='destaque-title'>{titulo}</h5>
            <span className='destaque-desc'>{descricao}</span>
        </Link>
    );
};

const DestaqueSlideCard = ({ slide }) => {
    const to = slide ? slide.to : '';
    const titulo = slide ? slide.titulo : ''; 
    const descricao = slide ? slide.descricao : ''; 
    const imagem = slide ? slide.imagem : defaultCardImage;

    return (
        <Link to={to} className="destaque-slide-card">
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