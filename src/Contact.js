import { useState, useEffect } from "react";
import { LoaderPage } from "./LoaderPage";
import imageSix from './footer.png';
import image from './contact-1.png';
import Swal from 'sweetalert2';

function Contact () {

    const [stateLoader, setStateLoader] = useState(true);
    const [valueContactName, setValueContactName] = useState('');
    const [valueContactEmail, setValueContactEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false), 1000)
        return () => clearTimeout(timer)
        },[]);

        const clickToContact = () => {
            if(!valueContactName || !valueContactEmail) {
                    Swal.fire({
                    icon: "error",
                    text: "Please enter your information!"
               }); 
            } else{
                    Swal.fire("Your login was successful!");
                    setValueContactName('')
                    setValueContactEmail('')
                    // onClose(null)
            }
        }

        const handleContactNameChange =(e) => {
            setValueContactName (e.target.value)
        }
        const handleContactEmailChange =(e) => {
            setValueContactEmail (e.target.value)
        }

    return(
       <div className="contactContainer">

        {stateLoader && <LoaderPage/>}

        <h1 className="ContactUsHeader">Contact us</h1>

        <div className="ContactusInfo">
            <div className="inputinfo">
                <p className="parContact">Contact us</p>
                <p className="par-contact">Do you want to know more about our products? <br></br>
                Leave your information and we will contact you</p>
                <img src={image} alt="icon" width="300"/>
            </div>
            <div className="inputinfo">
                <input
                 className="inputContact" 
                 placeholder="Your name..." 
                 type="text"
                 onChange={handleContactNameChange}
                 value={valueContactName}
                 />
                <input 
                className="inputContact" 
                placeholder="Your email..." 
                type="text"
                onChange={handleContactEmailChange}
                 value={valueContactEmail}
                />
                <textarea className="textContactMessage" placeholder="Your message..." type="text"/>
                <button 
                className="shopButton"
                onClick= { clickToContact } >Contact us</button>
            </div>
        </div>

        <img src={imageSix} alt='footer' width='100%'/>
    </div>)
}
export default Contact;
