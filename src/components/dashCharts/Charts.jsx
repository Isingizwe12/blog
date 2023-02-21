import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import DashTopbar from "../../topbar/DashTopbar";
import Sidebar from "../../sidebar/Sidebar";
import '../addPost/AddPost.css'

export default function Charts() {
  const myData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const [userData, setUserData] = useState({
    labels: myData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: myData.map((data) => data.userGain),
            backgroundColor: ["teal", "tomato", "green"],
       
          
      },
    ],
  });
     const datas = [
       {
         id: 1,
         year: 2016,
         userGain: 80000,
         userLost: 823,
       },
       {
         id: 2,
         year: 2017,
         userGain: 45677,
         userLost: 345,
       },
       {
         id: 3,
         year: 2018,
         userGain: 78888,
         userLost: 555,
       },
       {
         id: 4,
         year: 2019,
         userGain: 90000,
         userLost: 4555,
       },
       {
         id: 5,
         year: 2020,
         userGain: 4300,
         userLost: 234,
       },
     ];

     const [useData, setUseData] = useState({
       labels: datas.map((data) => data.year),
       datasets: [
         {
           label: "User Lost",
           data: datas.map((data) => data.userLost),
            backgroundColor: ["black", "blue", "green"],
           borderColor:'red'
          
         },
       ],
     });
  return (
    <>
      {/* <DashTopbar /> */}
      <Sidebar />
      <div
        className="addPost"
        style={{
          width: "600px",
          position: "absolute",
          top: "15rem",
          left: "30rem",
          border: "groove",
        }}
      >
        <Bar data={userData} />
      </div>
      <div
        style={{
          width: "600px",
          position: "absolute",
          top: "37rem",
          left: "30rem",
          border: "groove",
        }}
      >
        <Line data={useData} />
      </div>
    </>
  );
}
