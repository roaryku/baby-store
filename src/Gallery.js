// import { useState } from 'react';
import imageOne from './gal_1.png';
import imageTwo from './gal_2.png';
import imageThree from './gal_3.png';
import imageFour from './gal_4.png';
import imageFive from './face.png';
import imageSix from './footer.png';
import review1 from './review1.png';
import review2 from './review2.png';
import { Link } from 'react-router-dom';

function Gallery () {

    return(
    <div className="galleryBody">
        <p className='galery-par'>Gallery</p>
            <div className='photo-galery'>
               <img className="imageGallery" src={imageOne}  alt='galery'/>
               <img className="imageGallery" src={imageTwo}  alt='galery'/>
               <img className="imageGallery" src={imageThree}  alt='galery'/>
               <img className="imageGallery" src={imageFour}  alt='galery'/>
        </div>

    
        <div className='about'>
          <img src={imageFive} alt='footer' className='about-face'/>
            <div className='aboutButtonLink'>
            <Link to='/about'>
                <button className='about-btn'>Learn more</button>
            </Link>
    </div>
       </div>

       <div className='reviewContainer'>
        <div className='reviewHeader'>
            <img className="photo-review" src={review1} alt='review'/>
            <p className='review-par'>These organic products clear my breakouts, fight against the <br></br> dreaded mascne (mask acne).</p>
        </div>

         <div className='reviewHeader'>
            <img className="photo-review" src={review2} alt='review'/>
            <p className='review-par'> It's gentle enough to keep my skin happy but also strips my <br></br>  makeup just  as well as makeup remover.</p>
         </div>
       </div>
      

        <img src={imageSix} alt='footer' width='100%' />
</div>
    )
}
export default Gallery;