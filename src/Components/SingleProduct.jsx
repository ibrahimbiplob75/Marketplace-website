import PropTypes from "prop-types";
import Swal from "sweetalert2";

const SingleProduct = ({ product }) => {
  const { _id, name, price, photo, category, brand } = product;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/myCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Cart Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="items-center m-10">
      <tbody>
        {/* row  */}
        <tr>
          <td>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </td>
          <td>
            <div className="grid grid-cols-4 gap-4 items-center space-x-3">
              <div className="avatar col-span-1">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div className="col-span-1">
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{price}</div>
              </div>
            </div>
          </td>
          <td className="flex items-center mt-3">
            <div className="badge badge-outline">{brand ? brand : ""}</div>
            <br />
            <span className="badge badge-ghost badge-sm"></span>
            <div className="badge badge-outline">
              {category ? category : ""}
            </div>
          </td>

          <td className="pl-5">
            <button className="btn btn-outline btn-success ml-4">Update</button>
            <button
              onClick={()=>handleDelete(_id)}
              className="btn btn-outline btn-warning ml-4"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};
SingleProduct.propTypes = {
  product: PropTypes.object,
};

export default SingleProduct;
