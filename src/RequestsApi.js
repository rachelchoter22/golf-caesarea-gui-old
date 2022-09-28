import axios from 'axios'
// let ottToken;
let status = null;



export async function login(url, username, password) {
    debugger
       try {
        debugger
        await axios.get(url, { username, password })
            .then((response) => {
                console.log("response", response);
                status = "true";
            })
            .catch(function (error) {
                console.log("error", error);
                status = "false";
            })
    } catch (error) {
        debugger
        console.log("error 2 ", error);
        status = "false";
    }
    return status;
}

// export async function login(url, username, password, setLoader, setMessageError) {

//     try {
//         setLoader(true);
//         debugger
//         await axios.post(url, { username, password })
//             .then((response) => {
//                 console.log("response",response);
//                 setLoader(false)
//                 localStorage.setItem('token', JSON.stringify(response.data.payload.token));

//                 // if (response.data.payload.ottToken) {
//                 //     ottToken = response.data.payload.ottToken
//                 //     // open(return_url);
//                 // }
//                 // else {
//                 //     localStorage.setItem('token', JSON.stringify(response.data.payload.token));
//                 //     status = "Connected"
//                 // }

//             })
//             .catch(function (error) {
//                 console.log("response",error);

//                 debugger
//                 if (error.response.status === 400) {
//                     setLoader(false)
//                     if (error.response.data.message === "The password has expired") {
//                         setMessageError("פג תוקף הסיסמה,אנא עדכן סיסמה חדשה");
//                         status = "Expired password"
//                     }
//                     else {
//                         setMessageError("שם המשתמש או הסיסמה שגויים");
//                         status = "Invalid password/user"
//                     }

//                 }

//             })
//     }
//     catch (error) {
//         console.log("response",error);

//         setLoader(false)
//         setMessageError("בעיה בחיבור לשרת");
//     }
//     console.log("status",status);

//     return status
// }

export async function AccountsApiAuth(url, resetPasswordToken, setHelloUser, helloUser, connectedSuccessfully, setConnectedSuccessfully) {
    let token;
    try {
        if (resetPasswordToken != null)
            token = resetPasswordToken;
        else
            token = localStorage.token.replace(/['"]+/g, '');

        await axios.get(url, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                setConnectedSuccessfully(false)
                if (response.data.payload[0].full_name)

                    setHelloUser(response.data.payload[0].full_name.split(' ')[0]);
                else {
                    setHelloUser(response.data.payload[0].username)
                }
                status = "true";
            })

            .catch(function (error) {
                setConnectedSuccessfully(true)

                if (error.response.status === 403 || error.response.status === 401) {
                    localStorage.removeItem('token');
                    status = "false";
                }
                else {
                    console.error(error);
                    status = "false";
                }
            })
    } catch (error) {

        console.log(error, "בעיה בחיבור לשרת");
        status = "false";
    }

    return status;
}

export async function AccountsApisignOut(url, token) {
    try {
        await axios.get(url,
            {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then((response) => {
                status = "true";
            })
            .catch(function (error) {
                status = "false";
            })
    } catch (error) {
        status = "false";
    }
    return status;
}

export async function ApiForgotPassword(url,username) {
    try {
        await axios.post(url, { username })
            .then((response) => {
                status = 'קישור לאיפוס סיסמה נשלח בהצלחה ';
            })
            .catch(function (error) {
                status = 'אין באפשרותך לשחזר את הסיסמה דרך הדוא"ל, אנא פנה למוקד הטלפוני. תודה' ;
            })
    } catch (error) {
        status = 'בעית שרת';
    }
    return status;
}