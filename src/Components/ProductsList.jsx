import { useLoaderData } from "react-router-dom";
import SingleProduct from '../Components/SingleProduct';

const ProductsList = () => {
    const allProduct=useLoaderData();
    return (
      <div className="m-auto w-4/5 justify-center">
        {allProduct.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    );
};

export default ProductsList;