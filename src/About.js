import { useState, useEffect } from "react";
import { LoaderPage } from "./LoaderPage";
import React from 'react';
import './App.css';
import BcAccordion from './BcAccordion';
import 'bootstrap/dist/css/bootstrap.min.css';



function About () {

    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false), 1000)
        return () => clearTimeout(timer)
        },[]);

        
    return(<div className="containerAboutAcc">
        {stateLoader && <LoaderPage/>}
          <div>
            <BcAccordion/>
          </div>
</div>)
}
export default About;