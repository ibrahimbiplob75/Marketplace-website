import { useLoaderData } from "react-router-dom";
import MySingleCart from "./MySingleCart";



const MyCart = () => {
     const datas = useLoaderData();
     
    return (
      <div>


        
            
           
            {datas.map((data) => (
              <MySingleCart key={data._id} data={data}></MySingleCart>
            ))}
        



      </div>
    );
};

export default MyCart;