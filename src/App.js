import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product/:productId" 
          element={<ProductDetail />}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
