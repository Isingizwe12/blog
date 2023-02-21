import './SinglePost.css'
import Post2 from '../../image/Post2.jpg' 
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function SinglePost() {
  return (
    <div className='singlePost' >
      <div className="singlePostWrapper">
        <img src={Post2} alt=""  className='singlePosting'/>
        
        <h1 className='singlePostTitle'> Lorem ipsum dolor sit amet consectetur adipisicing elit
        <div className="singlePostEdit">
           <FiEdit className='singlePostIcon'/> 
           <RiDeleteBin6Line className='singlePostIcon'/>
        </div>
        
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Aline</b>
            </span>
            <span className="singlePostDate">
               <b>1 hour ago</b>
            </span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam possimus praesentium! Id facilis doloribus, possimus quam 
            sunt iste non eveniet error, 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nostrum at, rerum soluta, suscipit laudantium saepe commodi nam itaque 
            nesciunt 
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum suscipit obcaecati tempora culpa similique harum ea eaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus consectetur beatae iste delectus eaque ea, voluptates laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero accusamus at beatae ex culpa, magni nihil tempora explicabo 
           iusto distinctio adipisci dolor dignissimos fuga? Ipsum earum magnam voluptatibus mollitia! placeat voluptatem minus minima sed recusandae corporis pariatur qui aliquid vitae itaque. lo labore perferendis tenetur. Eligendi consequatur expedita animi vitae amet accusantium at soluta neque? tempora sint dolor ratione ex accusamus asperiores quae, exercitationem reiciendis! rerum dolores, maxime optio vitae sed reprehenderit! Dignissimos.</p>
        
        </div> 
       
       
       </div>
  )
}
