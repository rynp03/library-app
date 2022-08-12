import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";
import { AppProvider } from "./context";
import Header from "./Components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
