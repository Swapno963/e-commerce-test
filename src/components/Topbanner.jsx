import img1 from "../assets/top-1.jpg";
import img2 from "../assets/top-2.png";
import img3 from "../assets/top-3.jpg";
import img4 from "../assets/top-4.jpg";
import img5 from "../assets/top-5.jpg";
import TopBannerCarosel from "./TopBannerCarosel";
export default function Topbanner() {
  const category = [
    { id: 1, name: "Women's & Girls' Fashion" },
    { id: 2, name: "Health & Beauty" },
    { id: 3, name: "Watches, Bags, Jewellery" },
    { id: 4, name: "Men's & Boys' Fashion" },
    { id: 5, name: "Mother & Baby" },
    { id: 6, name: "Electronics Device" },
    { id: 7, name: "TV & Home Appliances" },
    { id: 8, name: "Electronic Accessories" },
    { id: 9, name: "Groceries & Pets" },
    { id: 10, name: "Home & Lifestyle" },
    { id: 11, name: "WSports & Outdoors" },
    { id: 12, name: "Automotive & Motorbike" },
  ];
  const slides = [img1, img2, img3, img4, img5];
  return (
    <div className=" w-4/5 grid grid-cols-12 min-h-40 mx-auto gap-4">
      <div className="bg-gray-100 rounded-md  sm:col-span-2 col-span-12 pl-4 my-12  py-3 max-h-[70%]">
        {category?.map((ct) => (
          <p key={ct?.id} className="text-gray-500 text-lg pb-1 font-semibold">
            {ct?.name}
          </p>
        ))}
      </div>
      <div className="col-span-12 mt-6 rounded-md sm:col-span-10  py-6">
        <TopBannerCarosel slides={slides} />
      </div>
    </div>
  );
}
