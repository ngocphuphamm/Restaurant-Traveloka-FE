
import "../../../assets/admin/productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantMenuSharpIcon from '@mui/icons-material/RestaurantMenuSharp';
export default function RestaurantAdmin() {
    const [data, setData] = useState(productRows);
    const [dataRestaurant, setDataRestaurant] = useState([]);
    const infoLogin = JSON.parse(window.localStorage.getItem('accessToken'))

    useEffect(() => {
        const getDataRestaurant = async () => {
            try {

                const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/getRestaurantAdmin/${infoLogin.sub}`)

                let count = 0;
                let dataList = []
                await res.data.map(async (el) => {
                    count++;
                    let customData = {
                        id: count,
                        idRestaurant: el.idRestaurant,
                        nameRestaurant: el.nameRestaurant,
                        addressRestaurant: el.addressRestaurant,
                        imagesRestaurants: el.imagesRestaurants[0].urlRestaurant,
                        priceService: el.priceService.toLocaleString() + ",000 VND",
                        likes: el.likes,

                    }
                    await dataList.push(customData);
                })
                await setDataRestaurant(dataList);
            }
            catch (err) {
                console.log(err);
            }

        }
        getDataRestaurant()
    }, [infoLogin.sub])
    const handleDelete = async(idRestaurant) => {
        try{
               const {data} = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/deleteRestaurant/${idRestaurant}`);
           
               if(data.success === true)
                {
                    alert("Xóa Thành Công");
                    window.location.reload();
                }          
                else
                {
                    alert("Xóa Thất Bại");
                }
        }

        catch(err)
        {
            console.log(err)
        }
    };

    const columns = [
        { field: "idRestaurant", headerName: "ID", width: 50 },

        {
            field: "nameRestaurant",
            headerName: "Tên Nhà Hàng",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.imagesRestaurants} alt="" />
                        {params.row.nameRestaurant}
                    </div>
                );
            },
        },
        { field: "addressRestaurant", headerName: "Địa Chỉ", width: 400 },
        {
            field: "priceService" ,
            headerName: "Giá Dịch Vụ Khoảng",
            width: 150,
        },
        {
            field: "likes",
            headerName: "Lượt Thích",
            width: 100,
        },
        {
            field: "actionMenu",
            headerName: "Thực Đơn",
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/restaurant/menu/${ params.row.idRestaurant}`}>
                                <div className="ml-3"><RestaurantMenuSharpIcon/> </div> 
                        </Link>
                    </>
                );
            },
        },

        {
            field: "action",
            headerName: "Thao Tác",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/admin/restaurant/edit/${ params.row.idRestaurant}`}>
                            <button className="productListEdit">Sữa</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.idRestaurant)}
                        />
                    </>
                );
            },
        },

    ];

    return (
        <div className="productList">
            <Link to={`/admin/restaurant/create`}>
                <button className="btn btn-warning mb-2 ">Tạo Nhà Hàng</button>
            </Link>
          
            <DataGrid
                rows={dataRestaurant}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
            />

        </div>
    );
}