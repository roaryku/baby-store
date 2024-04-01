
import Carousel from "./Carousel";
import { data } from "./data";
import { useParams, useNavigate } from "react-router-dom";

function AboutProduct({image}){

    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            {data.filter((item) => item.title === title).map((element, index) => {
             return(
                <div key={index}>
                    <Carousel image={image}/>
                   <h4>{element.name}</h4>
                   <img src={element.image[index]} alt="product" width="400px"/>
                   <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
                </div>
             )   
            })}
        </div>
    )
}
export default AboutProduct;