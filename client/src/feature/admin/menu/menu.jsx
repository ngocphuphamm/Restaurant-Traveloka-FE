
import "../../../assets/admin/productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function MenuRestaurant()
{
    const [data, setData] = useState();
    const {idRestaurant}  = useParams();
    useEffect(() => {
        const getMenu = async () => {
            try {

                const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/food/getAllFood/${idRestaurant}`)
                let foodList = [];
                await data.map(async (el,index)=>{
                    let customData ={
                        nameFood : el.nameFood,
                        idFood : el.idFood,
                        id : index,
                        priceFood : el.priceFood.toLocaleString() + ",000 VND",
                        urlImage : el.urlImage
                    }
                    await foodList.push(customData);
                })
                setData(foodList);
            }
            catch (err) {
                console.log(err);
            }

        }
        getMenu()
    },[] )
    const handleDelete = (idRestaurant) => {
        setData(data.filter((item) => item.idRestaurant !== idRestaurant));
    };

    const columns = [
        { field: "idFood", headerName: "ID", width: 100 },

        {
            field: "nameFood",
            headerName: "Tên Món Ăn",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.urlImage} alt="" />
                        {params.row.nameFood}
                    </div>
                );
            },
        },
        { field: "priceFood", headerName: "Giá Tiền", width: 400 },
       {
            field: "action",
            headerName: "Thao Tác",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/restaurant/edit/${ params.row.idFood}`}>
                            <button className="productListEdit">Sữa</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.idFood)}
                        />
                    </>
                );
            },
        },

    ];

    return (
        <div className="productList">
            <Link to={`/admin/restaurant/menu/create/${idRestaurant}`}>
                <button className="btn btn-warning mb-2 ">Tạo Thức Ăn</button>
            </Link>
          {data ? 
              <>     <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
          /></>
          : <></>}
       

        </div>
    );
}
