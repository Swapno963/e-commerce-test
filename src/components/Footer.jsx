import gallary from "../assets/app_gallary.svg";
import aus from "../assets/aus.png";
import bd from "../assets/bd.png";
import can from "../assets/canada.png";
import g_store from "../assets/google_store.png";
import i_store from "../assets/i_store.jpeg";
import qr_code from "../assets/qr_code.png";
import usa from "../assets/usa.png";

export default function Footer() {
  return (
    <div className="w-4/5  mx-auto flex-row sm:flex justify-around  pt-12 ">
      {/* help */}
      <div className="inline-block ">
        <h2 className="text-2xl font-semibold text-primary pb-4">
          Customer Care
        </h2>
        <p className="text-xl pb-1">Help Center</p>
        <p className="text-xl py-1">How to Buy</p>
        <p className="text-xl py-1">Returns & Refunds</p>
        <p className="text-xl py-1">Contact Us</p>
        <p className="text-xl py-1">Terms & Conditions</p>
      </div>
      {/* daraz */}
      <div className="inline-block pl-[20%] sm:pl-[0px]">
        <h2 className="text-2xl font-semibold text-primary pb-4">Daraz</h2>
        <p className="text-xl pb-1">About</p>
        <p className="text-xl py-1">Paynment</p>
        <p className="text-xl py-1">Card</p>
        <p className="text-xl py-1">Blog</p>
        <p className="text-xl py-1">Mart</p>
      </div>
      {/* country */}
      <div>
        <h2 className="text-2xl font-semibold text-primary pb-4">
          Daraz International
        </h2>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex gap-3">
            <img className="w-[30px] rounded-md" src={usa} alt="" />
            <p className="text-xl ">Usa</p>
          </div>
          <div className="flex gap-3">
            <img className="w-[30px] rounded-md" src={aus} alt="" />
            <p className="text-xl ">australia</p>
          </div>
          <div className="flex gap-3">
            <img className="w-[30px] rounded-md" src={can} alt="" />
            <p className="text-xl ">Canada</p>
          </div>
          <div className="flex gap-3">
            <img className="w-[30px] rounded-md" src={bd} alt="" />
            <p className="text-xl ">Bangladesh</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-primary pb-4 pt-8">
          Follow Us On
        </h2>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex gap-3">
            <img className="w-[30px] rounded-md" src={usa} alt="" />
            <img className="w-[30px] rounded-md" src={usa} alt="" />
            <img className="w-[30px] rounded-md" src={usa} alt="" />
            <img className="w-[30px] rounded-md" src={usa} alt="" />
          </div>
        </div>
      </div>
      {/* qr code and app stores */}
      <div>
        <h2 className="text-2xl font-semibold text-primary pb-4">
          Exclusive Deals and Offers!
        </h2>
        <div className="grid grid-cols-2">
          <div>
            <img className="w-[150px] h-[150px]" src={qr_code} alt="" />
          </div>
          <div>
            <img
              className="w-[100px] h-[50px] rounded-md py-1"
              src={i_store}
              alt=""
            />
            <img
              className="w-[100px] h-[50px] rounded-md py-1"
              src={g_store}
              alt=""
            />
            <img
              className="w-[100px] h-[50px] rounded-md py-1"
              src={gallary}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
