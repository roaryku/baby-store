import { Link } from 'react-router-dom';
import image from './card.png';

function HomeButton () {
    
    return(
        <div className="homeButtonContainer">
            <div>
                <Link to="/shop">
                    <button className='shopButton'>Shop Now</button>
                </Link>
                <Link to="/about">
                    <button className='learnButton'>Learn More</button>
                </Link>
            </div>
            <div className='card-button'>
                <img className="image-card" src={image} alt='card'/>
                <Link to = "/shop">
                   <button className='bestSaleShop'>Shop deal</button>
                </Link>
            </div>
        </div>
        
    )
}
export default HomeButton;