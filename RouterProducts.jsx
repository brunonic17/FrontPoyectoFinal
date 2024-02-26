import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./src/components/ProductList";
import ProductDetail from "./src/components/ProductDetail";
import App from "./src/App";



 export const RouterProducts = () => {
return (
    <BrowserRouter>
    <App />
    <Routes>
        <Route path="/productsList" element= {
            <ProductList />
        }>
        </Route>,
        <Route path="/productDetail" element= {
            <ProductDetail  />
        }>
        </Route>
        {/* <Route path="/detail" element= {
            <Detail id={id} />
        }>
        </Route> */}
    </Routes>
        </BrowserRouter>
)
}