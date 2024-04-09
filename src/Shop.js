import { data } from "./data";
import { useState } from "react";
import './App.css';
import Carousel from "./Carousel";
import Buttons from "./Buttons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


function Shop(){
    const [shop, setShop] = useState(data);
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
                const {id, name, description, price, image} = element

                  return(
                    <div key={id} >
                      <div className="container">
                        <Carousel image={image}/>
                        <h4 className="babyName">{name}</h4>
                        <p className="babyPrice">$ {price}</p>
                        <Link className="link" to ={`/about/${element.title}`}>
                        <p className="par">{description.substring(0, 5) + "..."}
                        <button className="bta">Read more</button></p>
                        </Link>
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
