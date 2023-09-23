import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShowProducts } from "./components/ShowProducts"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowProducts />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
