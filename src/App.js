import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Admin } from "./components/Admin";
import { PageNotFound } from "./components/PageNotFound";
import { ContactPh } from "./components/ContactPh";
import { ContactUs } from "./components/ContactUs";
import { ContactUk } from "./components/ContactUk";
import './App.css';

function App() {
  const user = true;
  const loggedIn = false;

  return (
      <div className="App">
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
  );
}

export default App;