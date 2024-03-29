function Buttons({chosenClothes}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => chosenClothes("clothes")}>Clothes</button>
            <button className="change" onClick={() => chosenClothes("accesories")}>Accessories</button>
            <button className="change" onClick={() => chosenClothes("wall-decor")}>Wall Decor</button>
            <button className="change" onClick={() => chosenClothes("furniture")}>Furniture</button>
            <button className="change" onClick={() => chosenClothes("set")}>Set</button>
        </div>
    )
}
export default Buttons;