import { data } from "./data";
import { useState, useEffect } from "react";
import './App.css';
import Carousel from "./Carousel";
import Buttons from "./Buttons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LoaderPage } from "./LoaderPage";
import imageSix from './footer.png';


function Shop(){
    const [shop, setShop] = useState(data);
    const [deleteButtonText, setDeleteButtonText] = useState("Delete All")
    const [stateLoader, setStateLoader] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000)
    return () => clearTimeout(timer)
    },[]);


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
          {stateLoader && <LoaderPage/>}
            <div>
            {/* <hr/> */}
          <h6 className='shipping'>Free Standart Shipping</h6>

          <div className="shopContainer">
            <h3>Shop our best skin products</h3>
            <p className="shopPar">Skin Envy beauty & spa everything the best for you</p>
          </div>
          
        </div>
            <Buttons chosenClothes={chosenClothes}/>
        
       <div className="products shop">
            {shop.map((element => {
                const {id, name, description, price, image} = element

                  return(
                    <div key={id} >
                      <div className="container">
                        <Carousel image={image}/>
                        <h4 className="careName">{name}</h4>
                        <p className="carePrice">$ {price}</p>
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
            <img src={imageSix} alt='footer' width='100%' />
          </div>
        
   )
}
export default Shop;
