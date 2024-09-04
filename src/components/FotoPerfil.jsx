import './FotoPerfil.css'

const FotoPerfil = ({src}) => {
    return (
        <div className='fotoPerfil'>
            <img src={src} alt="Foto de Perfil" />
        </div>
    )
};

export default FotoPerfil;