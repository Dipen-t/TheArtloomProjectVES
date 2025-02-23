import Gratitude from "./Components/comps/Gratitude"
import InsulatedBottle from "./Components/comps/InsulatedBottle"
import NotebookPage from "./Components/comps/NotebookPage"
import Stickers from "./Components/comps/Stickers"
import UndatedPlanner from "./Components/comps/UndatedPlanner"
import ProductDetails from "./Components/comps/ProductDetail"
import Home from "./Components/Layouts/Home"
import Layout from "./Components/Layouts/Layout"
import { BrowserRouter, Routes, Route } from "react-router"
import Cart from "./Components/comps/Cart"
import Desk from "./Components/comps/Desk"


function App() {
  return (
    <>
      <div className="cream-bg">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="Notebook" element={<NotebookPage />} />
              <Route path="gratitude" element={<Gratitude />} />
              <Route path="undated-planner" element={<UndatedPlanner />} />
              <Route path="insulated-bottle" element={<InsulatedBottle />} />
              <Route path="stickers" element={<Stickers />} />
              <Route path="cart" element={<Cart />} />
              <Route path="desk" element={<Desk />} />
            </Route>
            <Route path="/product-detqails/:_id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
