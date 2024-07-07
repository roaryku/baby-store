import { useState } from "react"
import ModalLogIn from "./ModalLogIn"
import ModalSignUp from "./ModalSignUp"

function SignUp () {

    const [openModel, setOpenModel] = useState(false)
    const [signModel, setSignModel] = useState(false)

    return(
        <div className="header-signUp">
            <button className="signUp" onClick={() => setOpenModel(true)}>Log in</button>
                <ModalLogIn
                open={openModel}
                onClose={() => setOpenModel(false)}
                
                />
            <button className="signUp" onClick={() => setSignModel(true)}>Sign up</button>
            <ModalSignUp
            sign={signModel}
            onClose={() => setSignModel(false)}
            />
        </div>
    )
}
export default SignUp