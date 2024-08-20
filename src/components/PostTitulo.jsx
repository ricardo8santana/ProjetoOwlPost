import Retangulo from '../assets/images/Retangulo36.png';
import './PostTitulo.css';

const PostTitulo = ({title, source}) =>{
    return (
        <div className='post-titulo'>
            <div >
                <div >
                    <img src={Retangulo}/>
                </div>
                <div >
                    <div>
                        <span className='post-card-author-name'>Titulo da Postagem</span>
                    </div>
                    <p className='post-card-author-location'> Lorem ipsum dolor sit amet. 
                    Est aperiam cumque ea provident nihil est  ratione ullam ut natus quisquam et molestias ullam ut delectus inventore  et totam nihil.
                    Aut sunt quisquam ut velit totam ut mollitia cumque aut  nulla quidem et commodi voluptatum quo animi facilis id similique  neque. 
                    Est nobis obcaecati non galisum aperiam et dolores libero et  blanditiis sint eum iure inventore. 
                    Sed reiciendis internos ut obcaecati  saepe et voluptatibus galisum quo distinctio expedita hic esse eius et  nostrum placeat non earum quibusdam.

                    Quo excepturi galisum aut quia numquam est quisquam aperiam aut omnis  pariatur eos alias voluptas non eveniet voluptas. 
                    Nam quia earum et  voluptatem dolore eum quia quidem ut veniam quaerat et mollitia error et  expedita quam et natus alias. Id </p>
                </div>
            </div>
        
        </div>
    )
   
};

export default PostTitulo;