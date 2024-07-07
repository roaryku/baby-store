import { useState } from "react";
// import { Link } from "react-router-dom";

function Carousel({image, width}) {
    const [index, setIndex] = useState(0)

    const prevBtn = () => {
        setIndex((index => {
            index --;
            if(index < 0 ) {
                return image.length - 1;
            }
            return index;
        }))
    }

    const nextBtn = () => {
        setIndex((index => {
            index ++;
            if ( index > image.length - 1) {
                index = 0;
            }
            return index;
        }))
    }

    return(
        <div className="product-card">
            <img className="care-items" src={image[index]} width={width} height="150px" alt="care items"/>
        <div className="cta">
            <button className="previous" onClick={prevBtn}>Back</button>
            <button className="previous" onClick={nextBtn}>Next</button>
          </div>
        </div>  
      
    )

}
export default Carousel;

