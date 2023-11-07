import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ContextProvider } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";


const ProductDetails = () => {
   const {  name, brand, category,details, photo, price } = useLoaderData();
   const {user}=useContext(ContextProvider);
   const user_email=user.email;

   const handleCart=()=>{
        const CartProduct={user_email,name,photo,price};
        console.log(CartProduct);

         fetch("http://localhost:5000/Cartproduct",{

         })
         .then(res=>res.json())
         .then(data=>{
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Coffee Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
         })



   }
    return (
      <div className="m-20">
        <div className="card w-3/4 m-auto bg-base-100 shadow-xl">
          <div>
            <figure>
              <img src={photo} alt="Album" />
            </figure>
          </div>
          <div>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{details}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              <button className="btn btn-success text-white font-medium w-1/2">
                {price}$
              </button>
              <div>
                <div className="rating gap-1 ml-5">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-lime-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-green-400"
                  />
                </div>
              </div>
            </div>

            <div className="card-actions justify-end m-8">
              <div className="badge badge-outline">{brand}</div>
              <div className="badge badge-outline">{category}</div>
            </div>
            <div className="card-actions justify-center m-5">
              <button onClick={handleCart} className="btn btn-primary">Buy Now !</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;