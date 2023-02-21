import './AddPost.css';
import DashTopbar from '../../topbar/DashTopbar';
import DashboardHeader from '../../header/DashboardHeader';
import Sidebar from '../../sidebar/Sidebar';
import {useForm} from 'react-hook-form'
import axios from 'axios';

export default function AddPost() {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = async(data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("author",data.author);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));
    console.log(data);

    try{
      await axios.post(
        "https://blogapi-uvr7.onrender.com/api/v1/blog/blogPost", formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("your was post sent successfully");
      reset();
    } catch(err){
      console.error(err.response);
    }
  }
   
  return (
    <>
      <Sidebar />
      <div className="addPost">
        <form className="addPostForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="addPostFormGroup">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              className="addPostInput"
              autoFocus={true}
              {...register("title")}
            />
          </div>

          <div className="addPostFormGroup">
            <label>content</label>
            <textarea
              placeholder="Blog content"
              type="text"
              className="addPostInput writeText"
              {...register("content")}
            ></textarea>
          </div>

          <div className="addPostFormGroup">
            <label>Author</label>
            <input
              placeholder="Enter an Author"
              type="text"
              className="addPostInput writeText"
              {...register("author")}
 />
          </div>
          <div className="addPostFormGroup">
            <label htmlFor="fileInput">Image</label>

            <input type="file" id="fileInput" {...register("image")} />
          </div>
          <button className="addPostSubmit">Add Post</button>
        </form>
      </div>
    </>
  );
}
