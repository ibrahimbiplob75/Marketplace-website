import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
    const {
      _id,
      name,
      brand,
      category,
      photo,
      price,
    } = data;
  return (
    <div>
      <Link to={`/product/details/${_id}`}>
        <div className="card w-auto max-h-fit bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              <button className="btn btn-success text-white font-medium">
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

            <div className="card-actions justify-end">
              <div className="badge badge-outline">{brand}</div>
              <div className="badge badge-outline">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Products.propTypes={
    data:PropTypes.object,
}

export default Products;
