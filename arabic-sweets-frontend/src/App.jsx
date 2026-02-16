import DefaultLayout from "./assets/layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import GlobalProvider from './contexts/GlobalContext'

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
