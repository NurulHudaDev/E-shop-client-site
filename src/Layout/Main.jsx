import React, { useState } from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import Home from '../Pages/Home/Home/Home';

const Main = () => {

   

    

    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            {/* <Outlet setCordCount={setCordCount}></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;