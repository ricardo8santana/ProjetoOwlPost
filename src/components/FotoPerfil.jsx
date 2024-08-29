import './FotoPerfil.css'

const FotoPerfil = ({user}) => {
    return (
        <div className='fotoPerfil'>
            <img src={user.profilePicture} loading='lazy'/>
        </div>
    )
};

export default FotoPerfil;