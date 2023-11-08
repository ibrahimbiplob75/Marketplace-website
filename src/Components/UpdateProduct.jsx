import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const data=useLoaderData();
    const {
        _id,
      name,
      quantity,
      brand,
      review,
      category,
      details,
      photo,
      price,
    }=data;
    const handleAddProduct = (event) => {
      event.preventDefault();

      const form = event.target;

      const name = form.name.value;
      const quantity = form.quantity.value;
      const brand = form.brand.value;
      const review = form.review.value;
      const category = form.category.value;
      const price = form.price.value;
      const details = form.details.value;
      const photo = form.photo.value;

      const UpdateProduct = {
        name,
        quantity,
        brand,
        review,
        category,
        details,
        photo,
        price,
      };

      console.log(UpdateProduct);

      fetch(`http://localhost:5000/product/myCart/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UpdateProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Product Updated Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    };

    return (
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update the Product</h2>
        <form onSubmit={handleAddProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={category}
                  name="category"
                  placeholder="Category name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Availiable product</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={brand}
                  name="brand"
                  placeholder="brand"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={price}
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={details}
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8 flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="review"
                  defaultValue={review}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={photo}
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Product" className="btn btn-block" />
        </form>
      </div>
    );
};

export default UpdateProduct;