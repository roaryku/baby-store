import { useState } from "react";

function Carousel({image}) {
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
            <div>
           <img src={image[index]} width="150px" height="200" alt="baby items"/>
        </div>

          <div className="cta">
            <button className="previous" onClick={prevBtn}>Previous</button>
            <button className="previous" onClick={nextBtn}>Next</button>
          </div>
        </div>
      
    )

}
export default Carousel;