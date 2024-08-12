import daraz from "../assets/daraz.png";

export default function NavBar() {
  return (
    <div>
      <div className="w-full sm:w-4/5 mx-auto flex-row sm:flex sm:justify-around  justify-around items-center bg-[#F85606] rounded-md">
        <div className="flex justify-center">
          <a href="/">
            <img className="w-[150px]" src={daraz} alt="" />
          </a>
        </div>
        <div className="flex justify-center">
          <input
            className="h-[30px]  rounded-md sm:w-[399]  w-[343px] py-4"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-center  text-white font-bold gap-8">
          <a href="login">Log In</a>
          <a href="register">Register</a>
        </div>
      </div>
    </div>
  );
}
