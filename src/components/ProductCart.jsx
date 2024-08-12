import product_img from "../assets/image_not_found.png";
export default function ProductCart({ product }) {
  console.log(product);

  return (
    <div className=" w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={product?.thumbnail ? product?.thumbnail : product_img}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product?.name}</h2>
        <p className="text-gray-600 mt-2">{product?.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-800 text-sm font-bold">
            {" "}
            Price : ${product?.price}
          </span>
          <span className="text-gray-800 text-sm font-bold">
            {" "}
            Quantity: {product?.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
