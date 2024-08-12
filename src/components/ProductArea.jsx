import ProductCart from "./ProductCart";
import Topbanner from "./Topbanner";

export default function ProductArea() {
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div>
      <Topbanner />
      <div className="flex mx-auto md:w-3/5">
        {/* <Login /> */}
        {products?.map((product) => (
          <ProductCart key={product.id} />
        ))}
      </div>
    </div>
  );
}
