import React, { useState } from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import Home from '../Pages/Home/Home/Home';

const Main = () => {

    const [count, setCount] = useState(0);

    const setCardCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <NavBar count={count}></NavBar>
            <Home setCardCount1={setCardCount}></Home>
            {/* <Outlet setCordCount={setCordCount}></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;