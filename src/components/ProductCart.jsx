export default function ProductCart() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src="https://via.placeholder.com/400x300"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
        <p className="text-gray-600 mt-2">
          A brief description of the product goes here. It should give users a
          good idea of what to expect from this product.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-800 text-lg font-bold">$29.99</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
