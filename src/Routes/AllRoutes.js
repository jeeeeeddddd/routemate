import { Routes, Route, Navigate } from "react-router-dom";
import { Home, ProductList,ProductDetail, Contact, Admin, PageNotFound, ContactPh, ContactUs, ContactUk } from "../pages";

export const AllRoutes = () => {
    const user = true;
    const loggedIn = false; 

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="contact" element={<Contact />}>
              <Route path="ph" element={<ContactPh />} />
              <Route path="us" element={<ContactUs />} />
              <Route path="uk" element={<ContactUk />} />
              <Route path="*" element={<ContactPh />} />
            </Route>
            <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
    </>
  )
}
