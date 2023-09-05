import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/*<HomePage />*/}
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;
