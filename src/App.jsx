import Footer from "./components/Footer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Topbanner from "./components/Topbanner";

export default function App() {
  return (
    <div>
      <NavBar />
      <Topbanner />
      {/* <ProductArea /> */}
      <Login />
      <Footer />
    </div>
  );
}
