import React from 'react';

//components
import {Header} from "./components/Header.jsx";
import {Home} from "./components/Home.jsx";
import {AboutUs} from "./components/AboutUs.jsx";
import {ContactUs} from "./components/ContactUs.jsx";
import {Games} from "./components/Games.jsx";
import {Footer} from "./components/Footer.jsx";
import {NotFound} from "./components/NotFound.jsx";
import {Route, Routes} from "react-router-dom";
import {GameSingle} from "./components/GameSingle.jsx";

//style
import "../style/style.scss";

export const App = () => {


    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/games/:id" element={<GameSingle/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};