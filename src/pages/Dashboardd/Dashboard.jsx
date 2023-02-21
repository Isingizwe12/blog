import "./Dashboard.css";
import DashboardHeader from "../../header/DashboardHeader";
import DashboardPosts from "../../components/dashboardPosts/DashboardPosts";
import Footer from "../FOOTER/Footer";
import DashTopbar from "../../topbar/DashTopbar";
import Sidebar from "../../sidebar/Sidebar";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Bar, Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

export default function Dashboard({ blogs }) {
 

  const [selected, setSelected] = useState(null);
  console.log(blogs)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: selected?.title,
      content: selected?.content,
      author: selected?.author
    },
  });
  const [modal, setModal] = useState(false);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios({
        method: "DELETE",
        url: `https://blogapi-uvr7.onrender.com/api/v1/blog/delBlog/${id}`,
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getSingleBlog = async (id) => {
    const selectedBlog = blogs.find((blog) => blog._id === id);
    setSelected(selectedBlog);
    reset();
    console.log(selectedBlog);
  };
  useEffect(() => {
    reset(selected);
  }, [selected]);

  const onSubmit = async ({ image, title, content,author }) => {
    console.log("submit");
    try {
      const formData = new FormData();
      formData.append("image", image[0]);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", author);
      // log
    const  res =   await axios.put(
        `https://blogapi-uvr7.onrender.com/api/v1/blog/upBlog/${selected._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res)
      alert("Post Updated Successfully", "Post updated successfully ", "Ok", {
        timeout: 2000,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <DashTopbar />
      <Sidebar />
      
      <div className="homes container">
        {blogs.map((blog) => {
          return (
            <table cellSpacing="2" cellPadding="2" className="tbl" >
              <tr>
                <td className="img">
                  <img src={blog.image} alt="" className="img-p" />{" "}
                </td>
                <td className="ttl">
                  {" "}
                  <span className="postTitle">{blog.title} </span>{" "}
                </td>
                <td className="des">
                  <p className="postDesc"> </p>
                </td>
                <td>
                  {" "}
                  <FiEdit
                    className="singlePostIcon"
                    onClick={() => {
                      getSingleBlog(blog._id);
                      setModal(true);
                    }}
                  />
                  <RiDeleteBin6Line
                    className="singlePostIcon"
                    id="delete-btn"
                    onClick={() => {
                      if (
                        window.confirm("Are you sure you want to delete this?")
                      ) {
                        handleDelete(blog._id);
                      }
                    }}
                  />
                </td>
              </tr>
            </table>
          );
        })}
      </div>

      {/* <Footer/> */}
      <div
        className="update"
        style={{
          backgroundColor: "white",
          width: "40vw",
          borderRadius: "10px",
          padding: "20px",
          display: !modal ? "none" : "block",
          marginLeft: "6px",
        }}
      >
        <forrm
          className="update-form"
          style={{
            display: !modal ? "none" : "block",
            position: "absolute",
            top: "380px",
            left: "400px",
            backgroundColor: "black",
            paddingLeft: "30px",
          }}
        >
          <h1>POST UPDATE</h1>
          <div className="blog-form-control">
            <label style={{ padding: "10px", textAlign: "center" }}>
              Title
            </label>
            <br />
            <input
              type="text"
              {...register("title")}
              style={{ padding: "10px", borderRadius: "10px", width: "30vw" }}
            />
          </div>
          <div className="blog-form-control">
            <label>Content</label>
            <br />
            <textarea
              type="text"
              cols="20"
              rows="10"
              {...register("content")}
              style={{ padding: "10px", borderRadius: "10px", width: "30vw" }}
            /><br/><br/>
            <input
              type="text"
              {...register("author")}
              style={{ padding: "10px", borderRadius: "10px", width: "30vw" }}
            />
          </div>
          <div className="blog-form-control">
            <label>Image</label>
            <input
              type="file"
              {...register("image")}
              style={{ padding: "10px", borderRadius: "10px", width: "30vw" }}
            />
          </div>
          <div className="modal-footer">
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "teal",
                cursor: "pointer",
                margin: "10px",
              }}
              onClick={handleSubmit(onSubmit)}
            >
              UPDATE
            </button>
            <button
              className="add"
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "brown",
                cursor: "pointer",
              }}
              onClick={() => {
                setModal(false);
              }}
            >
              CANCEL
            </button>
          </div>
        </forrm>
      </div>
    </>
  );
}
