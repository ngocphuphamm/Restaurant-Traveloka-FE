
import "../../../assets/admin/productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";

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
                        priceService: el.priceService,
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
    }, [])
    const handleDelete = (idRestaurant) => {
        setData(data.filter((item) => item.idRestaurant !== idRestaurant));
    };

    const columns = [
        { field: "idRestaurant", headerName: "ID", width: 50 },

        {
            field: "nameRestaurant",
            headerName: "Tên Nhà Hàng",
            width: 400,
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
            field: "priceService",
            headerName: "Giá Dịch Vụ Khoảng",
            width: 150,
        },
        {
            field: "likes",
            headerName: "Lượt Thích",
            width: 100,
        },
        {
            field: "action",
            headerName: "Thao Tác",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Sữa</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },

    ];

    return (
        <div className="productList">
            <DataGrid
                rows={dataRestaurant}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
            />
        </div>
    );
}