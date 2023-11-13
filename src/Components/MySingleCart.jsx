
import PropTypes from "prop-types";
import Swal from "sweetalert2";


const MySingleCart = ({data}) => {
    const {_id,name, photo,price}=data;

    const handleDelete=(_id)=>{
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
           fetch(`https://10th-assignment-server-tau.vercel.app/product/myCart/${_id}`, {
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
    }
    return (
      <div>
        <div className="overflow-x-auto m-20">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm opacity-50">{price}$</div>
                    </div>
                  </div>
                </td>

                <th>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};
MySingleCart.propTypes={
    data:PropTypes.object,
}

export default MySingleCart;