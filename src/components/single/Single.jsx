import Topbar from '../../topbar/Topbar'
import './Single.css'
import Footer from '../../pages/FOOTER/Footer'
import './SinglePost.css'
import post1 from '../../image/post3.jpg' 
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios'


export default function Single({blogs}) {
  const {register,handleSubmit,reset}=useForm();

  const { blogId } = useParams();
  const onSubmit = async (data) => {
    //  data=new data();
    // data.append("comment", data.comment);
    try {
      await axios.post(
        `https://blogapi-uvr7.onrender.com/api/v1/comment/addcomment/${blogId}`, data,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert('comment posted');
      reset();
    }
    catch (error) {
      console.log(error.response);
    }
  }
  
  const single = blogs.find((blog) => blog._id === blogId);
    // const {title, image, content,author,date,comments } = single;
    // console.log(comments);
  return (
    <>
    <Topbar/>
    <div className='single'>
        
    <div className='singlePost' >
      <div className="singlePostWrapper">
        <img src={single?.image} alt="" style={{width:'100%',height:'500px' ,border:'groove'}}/>
        
        <h1 className='singlePostTitle' style={{color: "black"}}>{single?.title}</h1>
      
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>{single?.author}</b>
            </span>
            <span className="singlePostDate">
               <b>{single?.date}</b>
            </span>
        </div>
        <p className='singlePostDesc' style={{lineHeight:'50px'}}>{single?.content}</p>
        
       {
        single?.comments.map(comment=>{
          return <div style={{margin:'20px'}} ><h4>{comment.username}</h4>
          
          <p>{comment.comment}</p></div>
        })
       }
        <p></p>
        
        </div> 
       <hr/><br/><br/>
       <div>
      <form onSubmit={handleSubmit(onSubmit)}>
     <label style={{fontFamily:'Varela Round,Sans-serif'}}>Write Your Comment</label><br/><br/>
     <textarea name="" id="" cols="30" rows="10" {...register('comment')} ></textarea><br/><br/>
     <button style={{padding:'10px',backgroundColor:'#b39656',color:'white',borderRadius:'10PX',width:'250px'}}>Comment</button>

      </form>

       </div>
       
       </div>

    </div>
    <Footer/>
    </>
  )
}
