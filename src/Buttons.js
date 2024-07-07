function Buttons({chosenClothes}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => chosenClothes("face")}>FACE</button>
            <button className="change" onClick={() => chosenClothes("hair")}>HAIR</button>
            <button className="change" onClick={() => chosenClothes("body")}>BODY</button>
            <button className="change" onClick={() => chosenClothes("gift")}>GIFT</button>
            <button className="change" onClick={() => chosenClothes("sale")}>SALE</button>
        </div>
    )
}
export default Buttons;