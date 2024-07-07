import { useState } from 'react';
// import signup from './signup.png';
// import logIn from './logIn.png'
import Swal from 'sweetalert2';

function ModalSignUp ({sign, onClose }){
    const [valueName, setValueName] = useState("");
    const [valueLast, setValueLast] = useState("");

    const clickToLogIn = () => {
        if( !valueName || !valueLast) {
            Swal.fire({
                icon: "error",
                text: "Please enter your information!"
            });
        } else {
            Swal.fire("Your login was successful!");
            setValueName('')
            setValueLast('')
            onClose(null)
        }
    }

    const handleNameChange =(e) => {
         setValueName (e.target.value)
    }
    const handleLastChange = (e) => {
        setValueLast(e.target.value)
    }
   
    if(!sign) return null
    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation();
            }}
              className="modalContainer"
            >
                <div className="modalRight">
                    {/* <img className='icon' src={signup} alt='icon'/> */}
                    <button className="closeBtn" onClick={onClose}>X</button>
                </div>
                <div className="content">
                    
                    <p>Sign up</p>
                    <input 
                        className="inputModal"
                        type="text" 
                        placeholder="Choose a user name..."
                        onChange={handleNameChange}
                        value={valueName}
                    />
                    <input className="inputModal" 
                        type="email" 
                        placeholder="Type your email..."
                        onChange={handleLastChange}
                        value={valueLast}
                    />
                    <button className='btnLog btnSignUp' onClick={clickToLogIn}>Sign up</button>
                </div>
            </div>
         </div>
    )
}
export default ModalSignUp;