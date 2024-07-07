import { useState } from 'react';
import Swal from 'sweetalert2';

function ModalLogIn ({open, onClose }) {

    const [valueName, setValueName] = useState('');
    const [valueLast, setValueLast] = useState('');

    const clickToLogIn = () => {
        if(!valueName || !valueLast) {
            Swal.fire({
                icon: "error",
                text: "Please enter your information!"
            }); 
        } else{
            Swal.fire("Your login was successful!");
            setValueName('')
            setValueLast('')
            onClose(null)
        }
    }

    const handleNameChange =(e) => {
         setValueName (e.target.value)
    }
    const handleLastChange =(e) => {
         setValueLast(e.target.value)
   }
   
    if(!open) return null
    return (
        <div onClick={onClose} className="overlay">

            <div onClick={(e) => {
                e.stopPropagation();
            }}
              className="modalContainer"
            >
                <div className="modalRight">
                    {/* <img className='icon' src={logIn} alt='icon'/> */}
                    <button className="closeBtn" onClick={onClose}>X</button>
                </div>
                <div className="content">
                    
                    <p>Log in</p>
                    <input 
                        className="inputModal"
                        type="text" 
                        placeholder="User name..."
                        onChange={handleNameChange}
                        value={valueName}
                    />
                    <input className="inputModal" 
                        type="email" 
                        placeholder="Password..."
                        onChange={handleLastChange}
                        value={valueLast}
                    />
                    <button className='btnLog' 
                    onClick={clickToLogIn}
                    >Log in</button>
                </div>
            </div>
         </div>
    )
}
export default ModalLogIn;