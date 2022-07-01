import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboar";
import InstituteForm from "../../pages/institue";
import InstituteData from "../../pages/DashboardComponents/institutedata";
import BugAdder from "../../pages/bugadder";
import Cards from "../../components/cards";
import HomeScreenHotel from "../../pages/HomeScreenComponents/homeScreen";


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomeScreenHotel />}></Route>
        <Route path="/institute" element={<InstituteForm />}></Route>
        <Route path="/bug" element={<BugAdder />}></Route>
        <Route path="/card" element={<Cards />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing;
