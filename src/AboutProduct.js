import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import { useState } from "react";


function AboutProduct({image}){

    const [showText, setShowText] = useState(false)
    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            
            {data.filter((element) => element.title === title).map((item, index) => {
              const {showMore} = item

       const showTextClick = (item) => {
       item.showMore = !item.showMore
       setShowText(!showText)
 }
                return(
                    <div>
                    <div key={index}>
                        <h2 className="babyName two">{item.name}</h2>
                        <p className="babyPrice three">$ {item.price}</p>
                        <img className="baby-image" src={item.image} alt="product" width="400px"/>
                        <p className="par par-product">{showMore ? item.description : item.description.substring(0, 25) + "..."}
                        <button className="bta" onClick={() => showTextClick(item)}>{showMore ? "Read less" : "Read more"}</button></p>
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