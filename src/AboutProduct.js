import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import { useState } from "react";
import Carousel from "./Carousel";


function AboutProduct(){

    const [showText, setShowText] = useState(false)
    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            {data.filter((element) => element.title === title).map((item, index) => {
            const { image } = item

                return(
                    <div key={index}>
                    <div className="carCont">
                        <h2 className="careName two">{item.name}</h2>
                        <p className="carePrice three">$ {item.price}</p>
                    </div>

                        <div className="carCont">
                            <Carousel image={image} width="150px"/>
                        </div>
                        
                    <div className="carCont">
                        <p className="par par-product">{showText ? item.description : item.description.substring(0, 25) + "..."}
                        <button className="bta" onClick={() => setShowText(!showText)}>{showText ? "Read less" : "Read more"}</button></p>
                    </div>

                    <div className="header shop">
                        <button  className="cta-delete"  onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                 </div>
                )

            })}
        </div>
       
    )
}
export default AboutProduct;