import {useParams} from "react-router-dom"
import {useState,useEffect} from "react";
import axios from "axios"
import EditInfoFood from './editInfoFood';
import InfoFood from "./infoFood";
export default function EditFood()
{
    const [infoFood,setInfoFood] = useState({});
    const {idFood} = useParams();
    useEffect(()=>{
      const getFood = async () =>{
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/food/getFood/${idFood}`);
        if(data.success === true)
        {
          setInfoFood(data.food[0])
          
        }
    }
    getFood();
    },[])
    const renderMenu = () => {
        if (infoFood) {
          return (
            <>
              <div className="userContainer">
                <InfoFood infoFood={infoFood}/>
                <EditInfoFood infoFood={infoFood} idFood={idFood}/>
  
              </div>
            </>
          )
        }
    
      }

    return (
        <>
          <div className="user">
            <div className="userTitleContainer">
              <h1 className="userTitle">Chi Tiết Món Ăn</h1>
            </div>
            {renderMenu()}
          </div>
        </>
    )
    
}