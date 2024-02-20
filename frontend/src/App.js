import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Review from "./pages/review/Review";
import Detail from "./pages/detail/Detail";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Book/>} />
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
