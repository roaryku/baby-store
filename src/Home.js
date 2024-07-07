// import logo from './logo.png'
import { useState, useEffect } from "react";
import { LoaderPage } from "./LoaderPage";
import HomeButton from "./HomeButtons";
import Gallery from "./Gallery";



function Home () {

    const [stateLoader, setStateLoader] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false), 1000)
        return () => clearTimeout(timer)
        },[]);

  
    return(<div className="body-home">
               {stateLoader && <LoaderPage/>}

        <div className="homeHeader">
            <p className="homePar">Don't miss our daily amazing deals</p>
            <h4 className="welcomeHome">Welcome to our Organic Beauty Store</h4>
            <h2 className="headerHomeChabge">Supercharge your skin with vitamin  blend</h2>
        </div>
          <div>
            <HomeButton/>
          </div>
          <hr className="separator" />
          <div>
            <Gallery/>
          </div>
        
    </div>)
}
export default Home;