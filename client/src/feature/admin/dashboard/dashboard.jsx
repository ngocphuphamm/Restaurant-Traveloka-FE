import "../../../assets/admin/home.css"
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import { useState, useEffect } from "react";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);






function Dashboard() {
  const [dataStatistical, setDataStatistical] = useState({
    labels: [],
    data: [],
    sumMoney : 0,
    sumBill :0 ,
    sumFood:0,
    nameRestaurant : ""
  })
  let { idRestaurant } = useParams();

  useEffect(() => {

    let newArray = [];
    let totalMoneyArray = []
    const getDashBoard = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/admin/dashboard/${idRestaurant}`);
      if(data.success) {
        await data.barchart.map(async (el) => {
          await newArray.push(el.Date);
          await totalMoneyArray.push(el.totalMoney);
          await setDataStatistical((dataStatistical) => {
            return {
              ...dataStatistical,
              labels: newArray,
              data: totalMoneyArray,
              sumMoney: data.sumMoney,
              sumBill : data.sumBill,
              sumFood : data.sumFood,
              nameRestaurant : data.nameRestaurant
            }
          })
        })
      }
      else
      {
        await setDataStatistical((dataStatistical) => {
          return {
            ...dataStatistical,
            labels: [],
            data: [],
            sumMoney: 0,
            sumBill : 0,
            sumFood : data.sumFood,
            nameRestaurant :""
          }
        })
      }

    }
    getDashBoard();
  }, [idRestaurant])

  const labels = dataStatistical.labels;
  const data = {
    labels,
    datasets: [
      {
        label: 'Doanh Thu',
        data: dataStatistical.data,
        backgroundColor: 'rgba(70, 88, 196, 0.9)',
      }
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Bảng Doanh Thu Tháng Của Nhà Hàng ${dataStatistical.nameRestaurant}`,
      },
    },
  };
  return (
    <div className="home mt-5">
      <FeaturedInfo dataStatistical={dataStatistical}/>
      {dataStatistical.sumMoney === 0 ? <div><h1 className="mt-5 text-center">CHƯA CÓ DOANH THU TRONG THÁNG NÀY</h1></div> : 
      <>
   
      <Bar  options={options} data={data} />;
      </>}
   
    </div>
  );
}
export default Dashboard
