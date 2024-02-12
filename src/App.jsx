import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Home from "./pages/Home";
import Cardetails from "./pages/Cardetails";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Hostlayout from "./components/Hostlayout";
import Dashboard from "./pages/Host/Dashboard";
import Hostcars from "./pages/Host/Cars/Hostcars";
import Hostcardtails from "./pages/Host/Cars/Hostcardtails";
import Nestedcardtails from "./pages/Host/Cars/Nestedcardtails";
import Nestedcardprice from "./pages/Host/Cars/Nestedcardprice";
import NestedcardPhoto from "./pages/Host/Cars/NestedcardPhoto";
import Errorpage from "./Errorpage";

import loader from "./server";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login/>}/>
      <Route path="cars" element={<Cars />} loader={loader} />
      <Route path="cars/:id" element={<Cardetails />} loader={loader} />
      <Route path="host" element={<Hostlayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="cars" element={<Hostcars />} />
        <Route path="cars/:id" element={<Hostcardtails />}>
          {/* useParams */}
          <Route index element={<Nestedcardtails />} />
          {/* useOutletContext */}
          <Route path="price" element={<Nestedcardprice />} />
          <Route path="image" element={<NestedcardPhoto />} />
        </Route>
      </Route>
      <Route path="*" element={<Errorpage />} />
    </Route>
  )
);
function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
