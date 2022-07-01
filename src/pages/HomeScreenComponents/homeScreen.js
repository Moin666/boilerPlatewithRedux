import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../../components/minavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "../HomeScreenComponents/contact";
import About from "../HomeScreenComponents/about";
import { Box } from "@mui/system";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hotelDataLoaded } from "../../confiq/Store/hotel";
import firebaseMethods from "../../confiq/firebase/firebaseMethods";
import { selectDataHotel } from "../../confiq/Store/middleware/hotelData";


import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  remove,
} from "firebase/database";
import app from "../../confiq/firebase/firebaseInitialization";
import MiCards from "../../components/cards";
import Login from "../login";
import SignUp from "../singup";
import Home from "../home";

function HomeScreenHotel(props) {
  let state = useSelector((state) => state);
  ///////*******firebase Read Start ******** */
  const [instObj, setInstObj] = useState([]);
  let [userDetails,setuserDetails] = useState([])
  const getData =  () =>{
    userDetails = firebaseMethods.readOperation('cards')
    setuserDetails(userDetails)
    console.log("read_data",userDetails)
    // console.log("read_data",userDetails[0].imgUrl)
  }

  React.useEffect(() => {
    getData("cards");  
  }, []);

  ///////*******firebase Read End ******** */

  /////////////TimeOut to dispatch actions of firebaseCallBegan start ///////////////////
  const [hotelData, setHotelData] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>   
                  <Route path='/' element ={<Login />} />
                  <Route path='/signup' element ={<SignUp />} />
                  <Route path='/home' element ={<Home />} />
              </Routes>
    </div>
  );
}

export default HomeScreenHotel;
