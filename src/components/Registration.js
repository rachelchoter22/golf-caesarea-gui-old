import React, { useState, useEffect } from 'react';

//images
import profileLogo from '../images/profile-logo.png'
import one1logo from '../images/one1-logo.png'
import teeTimeLogo from '../images/tee-time-logo.png'

//css
import '../css/golf-rtl.css'
import '../css/golfstyle.css'
import '../css/reset.css'
import 'reactjs-popup/dist/index.css';


export default function Registration(props) {

    const [username, setUsername] = useState();
    const [ErrorMassages, setErrorMassages] = useState();

    const [requiredFieldsName, setRequiredFieldsName] = useState([
        { name: "First name", nameHeb: "שם פרטי", value: "" },
        { name: "Last Name", nameHeb: "שם משפחה", value: "" },
        { name: "Email", nameHeb: "כתובת מייל", value: "" },
        { name: "Gender", nameHeb: "ז/נ", value: "" },
        { name: "Birthdate", nameHeb: "תאריך לידה", value: "" },
    ])
    const [requiredFieldsCity, setRequiredFieldsCity] = useState([
        { name: "City", nameHeb: "עיר", value: "" },
        { name: "Street", nameHeb: "רחוב", value: "" },
        { name: "House No", nameHeb: "מספר בית", value: "" },
        { name: "Zip code", nameHeb: "מיקוד", value: "" }

    ])
    const [requiredFieldsPhon, setRequiredFieldsPhon] = useState([
        { name: "Phone No", nameHeb: "טלפון", value: "" },
        { name: "Add.Phone No", nameHeb: "טלפון נוסף", value: "" },
        { name: "Company Name", nameHeb: "שם חברה", value: "" },
        { name: "Company Phone No", nameHeb: "טלפון חברה", value: "" }

    ])

    // copying the old datas array
    let newRequiredFieldsName = [...requiredFieldsName];
    let newRequiredFieldsCity = [...requiredFieldsCity];
    let newRequiredFieldsPhone = [...requiredFieldsPhon];

    const updateArrRequiredFields = () => {

        setRequiredFieldsName(newRequiredFieldsName);
        setRequiredFieldsCity(newRequiredFieldsCity);
        setRequiredFieldsPhon(newRequiredFieldsPhone);

        let index = 0;
        let lengthArry = requiredFieldsName.length - 1;
        while (requiredFieldsName[index].value !== '' || index === lengthArry) {
            if (index !== lengthArry) index++;
        }
        debugger
        console.log("requiredFieldsName.length", lengthArry);
        console.log("index", index);

        if (index === lengthArry) {
            debugger
            setErrorMassages(` השדה ${requiredFieldsName[index].nameHeb} לא מלא`);

        }
        else {
            setErrorMassages("")

        }

        // requiredFieldsName.forEach(element => {
        //     if (element.value === '') {
        //         setErrorMassages(` השדה ${element.nameHeb} לא מלא`);

        //     }
        // });
    }
    return (
        <div>
            Registration


            <title>Tee Time</title>

            {/* <body> */}

            <nav className="navbar navbar-fixed-top navbar-inverse navbar-custom" id="MainMenu">
                <div className="container">
                    <div className="navbar-header"><a href="" className="navbar-brand"><img src={teeTimeLogo} alt="" /></a></div>
                    {/* <!-- Navbar Header--> */}
                </div>
                {/* <!-- End Container--> */}
            </nav>

            <div className="container registration">
                <div className="form_title">
                    <span>טופס פתיחת לקוח חדש (הרשמה)</span>
                </div>

                <div className="row">
                    <div className="col-md-1 col-lg-2"> </div>
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">


                        <form className="form-horizontal">

                            {requiredFieldsName.map((index, key) =>
                                <div>
                                    {/* <!-- First name --> */}
                                    <div className="form-group form-fields  has-error">
                                        <label htmlFor="ufld:FIRSTNAME.DUMMY.MAALE" className="col-xs-3 col-sm-2 col-md-2 col-lg-2 NoPadding">
                                            <span id="ufld:FIRSTNAMEHDR.DUMMY.MAALE">{index.nameHeb}</span></label>
                                        <div className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
                                            <input id="ufld:FIRSTNAME.DUMMY.MAALE" className="form-control"
                                                onChange={(e) => newRequiredFieldsName[key].value = e.target.value}
                                            />
                                        </div>
                                    </div>

                                </div>
                            )}
                        </form>
                        <div className="form-address">
                            <span id="ufld:ADDRESSHDR.DUMMY.MAALE">כתובת</span>
                        </div>
                        <form className="form-horizontal">

                            {requiredFieldsCity.map((index, key) =>
                                <div>
                                    {/* <!-- First name --> */}
                                    <div className="form-group form-fields  has-error">
                                        <label htmlFor="ufld:FIRSTNAME.DUMMY.MAALE" className="col-xs-3 col-sm-2 col-md-2 col-lg-2 NoPadding">
                                            <span id="ufld:FIRSTNAMEHDR.DUMMY.MAALE">{index.nameHeb}</span></label>
                                        <div className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
                                            <input id="ufld:FIRSTNAME.DUMMY.MAALE" className="form-control"
                                                onChange={(e) => newRequiredFieldsCity[key].value = e.target.value}
                                            />
                                        </div>
                                    </div>

                                </div>
                            )}
                        </form>
                        <div className="form-address">
                            <span id="ufld:ADDRESSHDR.DUMMY.MAALE">טלפון</span>
                        </div>
                        <form className="form-horizontal">

                            {requiredFieldsPhon.map((index, key) =>
                                <div>
                                    {/* <!-- First name --> */}
                                    <div className="form-group form-fields  has-error">
                                        <label htmlFor="ufld:FIRSTNAME.DUMMY.MAALE" className="col-xs-3 col-sm-2 col-md-2 col-lg-2 NoPadding">
                                            <span id="ufld:FIRSTNAMEHDR.DUMMY.MAALE">{index.nameHeb}</span></label>
                                        <div className="col-xs-9 col-sm-10 col-md-10 col-lg-10">
                                            <input id="ufld:FIRSTNAME.DUMMY.MAALE" className="form-control"
                                                onChange={(e) => newRequiredFieldsPhone[key].value = e.target.value}
                                            />
                                        </div>
                                    </div>

                                </div>
                            )}
                        </form>

                        <button
                            className="btn btn-sm btn-info pull-opp-dir" type="button" id="ufld:SUBMIT.DUMMY.MAALE"
                            onClick={updateArrRequiredFields}
                        >צור פניה
                        </button>
                        <div>{ErrorMassages}</div>
                        {/* <!--div  id="SUBMIT" onClick="GetContent(this.id)" --> */}
                        {/* <div id="SUBMIT" onClick="GetContent(this.id)" >

                                <span className="btn btn-sm btn-info pull-opp-dir" id="ufld:SUBMIT.DUMMY.MAALE" onClick={validationRequiredFields}>שלח</span>
                            </div> */}
                    </div>
                    {/* <!-- End Container--> */}
                    <div className="col-md-1 col-lg-2"> </div>
                </div>
            </div >


            <div className="row FooterBottom container">
                <div className="col-xs-12 col-sm-6 col-md-6 cl-lg-6 FooterTextBottom">© 2016 כל הזכויות שמורות לגולף קיסריה | <a href="#" title="תנאי שימוש באתר">תנאי שימוש באתר</a></div>
                <div className="col-xs-12 col-sm-6 col-md-6 cl-lg-6">
                    <img src={profileLogo} alt="UX, UI, Web Development"
                        title="UX, UI, Web Development" className="pull-opp-dir FooterTextBottom" />
                    <img src={one1logo} alt="one1" className="pull-opp-dir Padding-dir-20" title="one1" /></div>
            </div>


            {/* <!-- Latest compiled and minified JavaScript --> */}
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
            {/* </body > */}
            {/* </html> */}


        </div >
    )
}