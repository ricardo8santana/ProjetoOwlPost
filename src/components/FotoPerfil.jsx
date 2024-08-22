import './FotoPerfil.css'

const FotoPerfil = ({user}) => {
    return (
        <div className='fotoPerfil'>
            <img src={user.profilePicture} alt="Foto de Perfil" />
        </div>
    )
};

export default FotoPerfil;