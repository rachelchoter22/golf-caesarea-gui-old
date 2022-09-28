import React, { useState } from "react";
import { ApiForgotPassword } from '../RequestsApi'

const ForgetPasswordA = ({ isShowForgetPassword, handleForgetPasswordClick }) => {

    //Username
    const [username, setUsername] = useState();

    //User message
    const [errorValidEmail, setErrorValidEmail] = useState("");

    // Sending Email 
    async function SendingEmail() {

        let url = `http://localhost:8080/ForgotPassword`
        // `http://${envDefaults.basicRoute}/api/v${envDefaults.version}/users/password/forgot`
        await ApiForgotPassword(url, username)
            .then((response) => {
                setErrorValidEmail(response)
                setTimeout(() => {
                    if (response === "הסיסמה שלך נשלחה אליך לכתובת המייל") {
                        handleForgetPasswordClick();
                        setErrorValidEmail("")
                        setUsername("")
                    }
                }, 1000);
            })
            .catch((err) => {
                setErrorValidEmail("בעית שרת")
            }
            )
    }
    return (
        <div className={`${isShowForgetPassword ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <br></br>
                        <input type="text" name="username" className="login-box" placeholder="הכנס שם משתמש" value={username} />
                        <br></br>
                        <button
                            value="אישור" className="login-btn"
                            type="button"
                            onClick={e => {
                                SendingEmail(e.target.value)
                            }}>
                        </button>
                        <label>{errorValidEmail}</label>

                    </form>
                </div>
             </div>
        // </div>
    );
};


function NavBarForgetPassword({ handleForgetPasswordClick }) {
    return (
        <div >
            <div>
                <span onClick={handleForgetPasswordClick} >
                    שכחתי סיסמא
                </span>
            </div>
        </div>
    );
}



export default ForgetPasswordA
export { NavBarForgetPassword }
