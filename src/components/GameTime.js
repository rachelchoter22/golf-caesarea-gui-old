// import engFlag from '../images/eng-flag.png'
// import profileLogo from '../images/profile-logo.png'
// import one1logo from '../images/one1-logo.png'
// import teeTimeLogo from '../images/tee-time-logo.png'


// import '../css/golf-rtl.css'
// import '../css/golfstyle.css'
// import '../css/reset.css'

// export default function Login() {

//     return (
//         <div>

//             {/* <html lang="he"> */}
//                 <title>Tee Time</title>
//                 {/* <!-- לבקשת ירון --> */}
//                 <meta name="Default" content="Uniface 9" />
//                 <meta charset="utf-8" />
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <link rel="stylesheet" type="text/css" href="../css/udsp.css" />
//                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
//                 {/* <!-- Optional theme --> */}
//                 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" />
//                 <link rel="stylesheet" type="text/css" href="../css/reset.css" />
//                 {/* <!-- Latest compiled and minified CSS --> */}
//                 <link rel="stylesheet" type="text/css" href="../css/golfstyle.css" />
//                 <link rel="stylesheet" type="text/css" href="../css/golf-rtl.css" />
//                 <link href="https://fonts.googleapis.com/css?family=Assistant" rel="stylesheet" />
//                 <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
//                 {/* <!-- Latest compiled and minified JavaScript --> */}
//                 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
//                 <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>

//                 <script src="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>

//                 <body>

//                     <div class="container">
//                         <div class="form_title"> <span>הזמנת משחק</span> </div>
//                         {/* <!-- End form_title --> */}
//                         <div class="row">
//                             <div class="col-sm-2 col-md-3 col-lg-3"></div>
//                             <div class="select_area col-xs-12 col-sm-8 col-md-6 col-lg-6">
//                                 <div class="form_subtitle "> <span id="ufld:FIELD_TYPE.DUMMY.MAALE">מגרש: 18 גומות</span> </div>
//                                 {/* <!-- End form_subtitle --> */}
//                                 <div class="pick_day_box">
//                                     <div class="backward_box col-xs-4 col-sm-3 col-md-3 col-lg-3 NoPadding">

//                                         <div class="pull-dir"><button type="button" class="btn btn-default btn-sm" id="ufld:BACKWARD_F.DUMMY.MAALE" alt="שבעה ימים אחורה">&lt;&lt;</button></div>
//                                         <div class="pull-dir  Padding-dir-7"><button type="button" class="btn btn-default btn-sm" id="ufld:BACKWARD_S.DUMMY.MAALE" alt="יום אחד לאחור">&lt;</button></div>

//                                         {/* <!--    */}
//                                         <div class=" pull-dir"><img src="../images/but-week-right.png" class="img-responsive" id="ufld:BACKWARD_F.DUMMY.MAALE" alt="שבעה ימים אחורה" /></div>
//                                         <div class=" pull-dir Padding-dir-7"><img src="../images/but-day-right.png" class="img-responsive" id="ufld:BACKWARD_S.DUMMY.MAALE" alt="יום אחד לאחור" /></div>
//                                         {/* --> */}
//                                     </div>
//                                     {/* <!-- End back_box --> */}
//                                     <div class="selected_date col-xs-4 col-sm-6 col-md-6 col-lg-6 NoPadding"> <span id="ufld:PICKDATE.DUMMY.MAALE">06/06/2016</span> &nbsp;|&nbsp; <span id="ufld:H_E_DAY.DUMMY.MAALE">יום ב'</span> </div>
//                                     {/* <!-- End selected_date --> */}
//                                     <div class="forward_box col-xs-4 col-sm-3 col-md-3 col-lg-3 NoPadding">

//                                         <div class="pull-opp-dir NoPadding"><button type="button" class="btn btn-default btn-sm" id="ufld:FORWARD_F.DUMMY.MAALE" alt="שבעה ימים קדימה">&gt;&gt;</button></div>
//                                         <div class="pull-opp-dir Padding-opp-dir-7"><button type="button" class="btn btn-default btn-sm" id="ufld:FORWARD_S.DUMMY.MAALE" alt="יום אחד קדימה">&gt;</button></div>

//                                         {/* <!-- */}
//                                         <div class="pull-opp-dir NoPadding "><img src="../images/but-week-left.png" class="img-responsive" id="ufld:FORWARD_F.DUMMY.MAALE" alt="שבעה ימים קדימה" /></div>
//                                         <div class="pull-opp-dir Padding-opp-dir-7"><img src="../images/but-day-left.png" class="img-responsive" id="ufld:FORWARD_S.DUMMY.MAALE" alt="יום אחד קדימה" /></div>
//                                         {/* --> */}

//                                     </div>
//                                     {/* <!-- End forward_box --> */}
//                                 </div>
//                                 {/* <!-- End pick_day_box --> */}
//                                 <div class="clearboth"> </div>
//                                 <div class="form_subtitle"> <span>בחר טווח שעות</span> </div>
//                                 {/* <!-- End form_subtitle --> */}

//                                 <div class="btn-group-justified but" role="group">
//                                     <div class="btn-group but" role="group">
//                                         <button type="button" class="btn btn-default btn-xs" id="gotomorning" onclick="jumpto('morning');">
//                                             <div class="Text14Green">בוקר</div>
//                                             <div class="hour"><b>06:00</b></div>
//                                             <div class="Text14Green">והלאה</div>
//                                         </button>
//                                     </div>
//                                     <div class="btn-group but Padding-dir-9 Padding-opp-dir-9 " role="group">
//                                         <button type="button" class="btn btn-default btn-xs" id="gotonoon" onclick="jumpto('noon');">
//                                             <div class="Text14Green">צהריים</div>
//                                             <div class="hour"><b>12:00</b></div>
//                                             <div class="Text14Green" >והלאה</div>
//                                         </button>
//                                     </div>
//                                     <div class="btn-group but" role="group">
//                                         <button type="button" class="btn btn-default btn-xs" id="gotoafternoon" onclick="jumpto('afternoon');">
//                                             <div class="Text14Green">אחה"צ</div>
//                                             <div class="hour"><b>15:00</b></div>
//                                             <div class="Text14Green">והלאה</div>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 {/* <!-- End class="btn-group-justified but" role="group" --> */}
//                             </div>
//                             <div class="col-sm-2 col-md-3 col-lg-3"></div>
//                         </div>
//                         <div class="row">
//                             <div class="col-sm-2 col-md-3 col-lg-3"></div>
//                             <div class="select_area col-xs-12 col-sm-8 col-md-6 col-lg-6 hour_spread">
//                                 <div class="form_subtitle"> <span id="ufld:SELECT_ORDER.DUMMY.MAALE">בחר שעת זינוק והזמן משחק</span> </div>
//                                 {/* <!-- End form_subtitle --> */}
//                                 <div class="hour_list_panel">
//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">06:00</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" /></div>
//                                                             <div id="GOLFER_1" name="GOLFER_1" >אלי ענבי</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" /></div>
//                                                             <div id="GOLFER_2" name="GOLFER_2" >יוסף ענתבי</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_3" name="GOLFER_3" >חיים מור</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_4" name="GOLFER_4" >יוסי וולף</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}

//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span>המשחק מלא</span> </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}

//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">06:10</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <span id="GOLFER_1" name="GOLFER_1" ></span> <span id="GOLFER_2" name="GOLFER_2" ></span> </div>
//                                                     <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <span id="GOLFER_3" name="GOLFER_3"></span> <span id="GOLFER_4" name="GOLFER_4"></span> </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}

//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <button type="button" class="btn btn-success" id="order" name="order">הזמן</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}

//                                     <div class="hour_detail ClosedYard">
//                                         <div class="row">
//                                             <div class="hour_value disabled col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <div><span>07:10</span></div>
//                                                 <div><span class="Text13">עד</span></div>
//                                                 <div><span>10:30</span></div>
//                                             </div>
//                                             <div class="hour_detail_box_disabled col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <p>המגרש סגור לרגל שיפוצים</p>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}
//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span></span> </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}

//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">10:40</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" ></div>
//                                                             <div id="GOLFER_1" name="GOLFER_1" >אלי ענבי</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_2" name="GOLFER_2" >יוסף ענתבי</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_3" name="GOLFER_3" >חיים מור</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}
//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <button type="button" class="btn btn-success" id="order" name="order">הזמן</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}

//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">10:40</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" /></div>
//                                                             <div id="GOLFER_1" name="GOLFER_1" >אלי ענבי</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_2" name="GOLFER_2" >יוסף ענתבי</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_3" name="GOLFER_3" >חיים מור</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}
//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <button type="button" class="btn btn-success" id="order" name="order">הזמן</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}
//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">10:40</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" /></div>
//                                                             <div id="GOLFER_1" name="GOLFER_1" >אלי ענבי</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_2" name="GOLFER_2" >יוסף ענתבי</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_3" name="GOLFER_3" >חיים מור</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}
//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <button type="button" class="btn btn-success" id="order" name="order">הזמן</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail --> */}
//                                     <div class="hour_detail">
//                                         <div class="row">
//                                             <div class="hour_value col-xs-3 col-sm-2 col-md-2 col-lg-2"> <span id="TEE_TIME" name="TEE_TIME">10:40</span> </div>
//                                             <div class="hour_detail_box col-xs-6 col-sm-8 col-md-8 col-lg-8">
//                                                 <div class="row">
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"><img src="../images/club_car.png" alt="רכב גולף" /></div>
//                                                             <div id="GOLFER_1" name="GOLFER_1" >אלי ענבי</div>
//                                                         </div>
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_2" name="GOLFER_2" >יוסף ענתבי</div>
//                                                         </div>
//                                                     </div>
//                                                     <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 NoPadding">
//                                                         <div>
//                                                             <div class="GolfCar"></div>
//                                                             <div id="GOLFER_3" name="GOLFER_3" >חיים מור</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- End hour_detail_box --> */}
//                                             <div class="order_box col-xs-3 col-sm-2 col-md-2 col-lg-2">
//                                                 <button type="button" class="btn btn-success" id="order" name="order">הזמן</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End hour_detail -->

//                                                                                 <!-- End hour_list_panel --> */}
//                                 </div>
//                                 {/* <!-- End class="btn-group-justified but" role="group" --> */}
//                             </div>
//                             <div class="col-sm-2 col-md-3 col-lg-3"></div>
//                         </div>
//                         {/* <!-- End select_area --> */}

//                         {/* <!-- End hour_spread --> */}
//                     </div>
//                     {/* <!-- End container --> */}


//                     <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
//                     {/* <!-- Latest compiled and minified JavaScript --> */}
//                     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
//                     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>
//                     <script src="https://cdn.rawgit.com/Eonasdan/bootstrap-datetimepicker/e8bddc60e73c1ec2475f827be36e1957af72e2ea/src/js/bootstrap-datetimepicker.js"></script>
//                 </body>
//             {/* </html> */}
//         </div>

//     )
// }

