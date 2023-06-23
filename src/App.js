import ironhackersImg from "./assets/ironhackers.avif";
import "./App.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <NavBar /> <br />
      <img src={ironhackersImg} alt="ironhackers" />

     

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
