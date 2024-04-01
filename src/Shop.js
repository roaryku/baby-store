import { data } from "./data";
import { useState } from "react";
import './App.css';
import Carousel from "./Carousel";
import Buttons from "./Buttons";
import Swal from "sweetalert2";


function Shop(){
    const [shop, setShop] = useState(data);
    const [showText, setShowText] = useState(false)
    const [deleteButtonText, setDeleteButtonText] = useState("Delete All")

    const removeGift = (id) => {
        let newGifts = shop.filter(gift => gift.id !==id)
        setShop(newGifts)
      }

      const chosenClothes = (searchTerm) => {
        const newClothes = data.filter(element => element.searchTerm === searchTerm)
        setShop(newClothes)
        }

    const handleClick = () => {
        Swal.fire({
            icon: "error",
            title: "Sorry!...",
            text: "Everything was deleted",
          });
        setDeleteButtonText("Please check back later.")
    }


    return(
        <div>
            <div>
            <hr/>
          <h6 className='shipping'>Free Standart Shipping</h6>
          
        </div>
            <Buttons chosenClothes={chosenClothes}/>
        
       <div className="products shop">
            {shop.map((element => {
                const {id, name, description, price, showMore, image} = element


           const showTextClick = (element) => {
           element.showMore = !element.showMore
           setShowText(!showText)
        }

                return(
                    <div>
                        <div key={id} className="container">
                        <Carousel image={image}/>
                        <h4 className="babyName">{name}</h4>
                        <p className="par">{showMore ? description : description.substring(0, 15) + "..."}
                        <button className="bta" onClick={() => showTextClick(element)}>{showMore ? "Read less" : "Read more"}</button></p>
                        <p className="babyPrice">$ {price}</p>

                     <div className="products">
                        <button className="buyNow" onClick={() => removeGift(id)}>Buy Now</button>
                    </div>
                   </div>
                </div>
                )
            }))}
            </div>

            <div className="header shop">
               <button className="cta-delete" onClick={() => handleClick (setShop ([]))}>{deleteButtonText}</button>
            </div>
          </div>
        
   )
}
export default Shop;