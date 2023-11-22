import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </> 
  );
};

export default App;
