
import PropTypes from "prop-types";


const MySingleCart = ({data}) => {
    const {name, photo,price}=data;
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
                  <button className="btn btn-error">Delete</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};
MySingleCart.propTypes={
    data:PropTypes.node
}

export default MySingleCart;