

const SingleProduct = ({product}) => {
    const {_id,name,price,photo,category, brand}=product;
    return (
      <div className="p-10 m-10">
        <tbody>
          {/* row  */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="grid grid-cols-4 gap-7 items-center space-x-3">
                <div className="avatar col-span-2">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="font-bold">{name}</div>
                  <div className="text-sm opacity-50">{price}</div>
                </div>
              </div>
            </td>
            <td className="justify-center items-center">
              <div className="badge badge-outline">{brand ? brand : ""}</div>
              <br />
              <span className="badge badge-ghost badge-sm"></span>
              <div className="badge badge-outline">
                {category ? category : ""}
              </div>
            </td>

            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </div>
    );
};

export default SingleProduct;