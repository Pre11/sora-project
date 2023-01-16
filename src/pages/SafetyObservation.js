import React from 'react'
import { Link } from 'react-router-dom'

function SafetyObservation() {
  return (
    <div>

<div className="app-admin-wrap layout-sidebar-vertical sidebar-full">
        <div className="sidebar-panel">
            <div className="jindal-brand pr-3 text-center mt-4 mb-4 d-flex justify-content-center align-items-center">
                <a href="/">
                    <img className="pl-3" src="assets/images/Jindal logo-light.png" alt="alt" />
                </a>
            </div>
            <div className="scroll-nav ps ps--active-y" data-perfect-scrollbar="data-perfect-scrollbar"
                data-suppress-scroll-x="true">
                <div className="side-nav">
                    <div className="main-menu">
                        <ul className="metismenu" id="menu">
                            <li className="Ul_li--hover">
                             
                            <i className="i-Bar-Chart text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light"><Link to = "/" ><h7>     Dashboard </h7> </Link></span>
                            </li>
                            
                            <li className="Ul_li--hover"><a className="has-arrow active" href="#"><i
                                        className="i-Library text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light">Safety Observation(PIOs) /
                                        Audits</span></a>
                                <ul className="mm-collapse">
                                    <li className="item-name"><a href="safety-observation.html"><i
                                                className="nav-icon i-Letter-Open text-light"></i><span
                                                className="item-name text-light">Safety Observation (PIOs)</span></a></li>
                                    <li className="item-name"><a href="line-walk-audit.html"><i
                                                className="nav-icon i-File-Clipboard-File--Text text-light"></i><span
                                                className="item-name text-light">Line Walk (Individual Audit)</span></a>
                                    </li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span
                                                className="item-name text-light">Cross Functional Team Audit</span></a></li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span
                                                className="item-name text-light">Group Safety Audit</span></a></li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span
                                                className="item-name text-light">FRCP Proactive</span></a></li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span
                                                className="item-name text-light">Internal Audit</span></a></li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span
                                                className="item-name text-light">External Audit</span></a></li>
                                </ul>
                            </li>

                            <li className="Ul_li--hover"><a href="#"><i
                                        className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light">Action To Be Taken <span
                                            className="outline-round-success px-1 py-1">06</span></span></a>
                            </li>

                            <li className="Ul_li--hover"><a href="my-raised-observ.html"><i
                                        className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light">My Raised Observation</span></a>
                            </li>

                            <li className="Ul_li--hover"><a className="has-arrow" href="#"><i
                                        className="i-Administrator text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light">Admin</span></a>
                                <ul className="mm-collapse">
                                    <li className="item-name"><a href="line-manager-master.html"><i
                                                className="nav-icon i-File-Clipboard-Text--Image text-light"></i><span
                                                className="item-name text-light">Line Manager Master</span></a></li>
                                </ul>
                            </li>

                            <li className="Ul_li--hover"><a className="has-arrow" href="#"><i
                                        className="i-Double-Tap text-20 mr-2 text-light"></i><span
                                        className="item-name text-15 text-light">Help</span></a>
                                <ul className="mm-collapse">
                                    <li className="item-name"><a href=""><i
                                                className="nav-icon i-Computer-Secure text-light"></i><span
                                                className="item-name text-light">User Manual</span></a></li>
                                </ul>
                            </li>
                            <li className="Ul_li--hover">
                                <div className="text-light text-12 mx-2">
                                    Version 3.0.1
                                    <br />
                                    Released On 15th Dec 2022
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ps__rail-x" style={{left: "0px" ,bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px " , width: "0px"}}></div>
                </div>
                
                    
                
                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
            </div>
            
        </div>
        <div className="switch-overlay"></div>
        <div className="main-content-wrap mobile-menu-content bg-off-white m-0">
            <header className="main-header bg-white d-flex justify-content-between p-2">
                <div className="header-toggle">
                    <div className="menu-toggle mobile-menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <p className="mr-3 mb-0"><i className="fas fa-map-location-dot text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Location"></i>
                        &nbsp;<strong>Location:</strong> Angul</p>
                    <p className="mr-3 mb-0"><i className="fas fa-building-user text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Department"></i>
                        &nbsp;<strong>Department:</strong> Angul IT</p>
                    <p className="mr-3 mb-0"><i className="fas fa-user-plus text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Logged In As"></i> &nbsp;<strong>Logged
                            In As:</strong> Suraj Kumar Dash</p>
                    <p className="mr-3 mb-0"><i className="fas fa-user-group text-20 cursor-pointer" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="User Category"></i> &nbsp;<strong>User
                            Category:</strong> LM</p>
                </div>
                <div className="header-part-right">
                    
                    <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen=""></i>
                    
                    <div className="dropdown dropleft">
                        <img className="header-icon" src="assets/images/profile.png" id="dropdownMenuButton"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="menu-icon-grid">
                                <a href="#"><i className="fas fa-arrow-right-from-bracket"></i> Logout</a>
                                <a href="#"><i className="i-Checked-User"></i> Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="main-content pt-4">
                <div className="breadcrumb">
                    <h1 className="mr-2">Safety Observation(PIOs)</h1>
                </div>
                <div className="separator-breadcrumb border-top"></div>

                <div className="row mb-4">
                    <div className="col-md-12 mb-4">
                        <div className="card text-left">
                            <div className="card-body">
                                <ul className="nav nav-tabs" id="myIconTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pending-icon-tab" data-toggle="tab" href="#pending" role="tab" aria-controls="pending" aria-selected="true"><i className="nav-icon i-Library mr-1"></i> Pending Safety Observations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="resolved-icon-tab" data-toggle="tab" href="#resolved" role="tab" aria-controls="resolved" aria-selected="false"><i className="nav-icon i-Library mr-1"></i> Resolved Safety Observations</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myIconTabContent">
                                    <div className="tab-pane fade show active" id="pending" role="tabpanel"
                                        aria-labelledby="pending-icon-tab">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12">
                                                <div>
                                                    <button className="btn btn-info m-1" type="button">Copy</button>
                                                    <button className="btn btn-info m-1" type="button">CSV</button>
                                                    <button className="btn btn-info m-1" type="button">Excel</button>
                                                    <button className="btn btn-info m-1" type="button">PDF</button>
                                                    <button className="btn btn-info m-1" type="button">Print</button>                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 pr-4">
                                                <input type="text" className="form-control m-1" name="daterange" value="" placeholder="Select date range"/>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <div className="card text-left">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="display table table-bordered" id="deafult_ordering_table" style={{width:"100%"}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Ref No.</th>
                                                                        <th>Incident Date</th>
                                                                        <th>Time (24Hr)</th>
                                                                        <th>Risk Category</th>
                                                                        <th>Reporting Type</th>
                                                                        <th>Status</th>
                                                                        <th>Line Manager</th>
                                                                        <th>Target Date</th>
                                                                        <th>Name</th>
                                                                        <th>Department</th>
                                                                        <th>Section</th>
                                                                        <th>Contact No.</th>
                                                                        <th>Employee Type</th>
                                                                        <th>Exact Location</th>
                                                                        <th>Details of Situation</th>
                                                                        <th>Reported By</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="resolved" role="tabpanel"
                                        aria-labelledby="resolved-icon-tab">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-12">
                                                <div>
                                                    <button className="btn btn-info m-1" type="button">Copy</button>
                                                    <button className="btn btn-info m-1" type="button">CSV</button>
                                                    <button className="btn btn-info m-1" type="button">Excel</button>
                                                    <button className="btn btn-info m-1" type="button">PDF</button>
                                                    <button className="btn btn-info m-1" type="button">Print</button>                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 pr-4">
                                                <input type="text" className="form-control m-1" name="daterange" value="" placeholder="Select date range"/>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <div className="card text-left">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="display table table-bordered" id="zero_configuration_table" style={{width:"100%"}}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Ref No.</th>
                                                                        <th>Incident Date</th>
                                                                        <th>Time (24Hr)</th>
                                                                        <th>Risk Category</th>
                                                                        <th>Closing Date</th>
                                                                        <th>Closed By</th>
                                                                        <th>Reporting Type</th>
                                                                        <th>Status</th>
                                                                        <th>Line Manager</th>
                                                                        <th>Target Date</th>
                                                                        <th>Name</th>
                                                                        <th>Department</th>
                                                                        <th>Section</th>
                                                                        <th>Contact No.</th>
                                                                        <th>Employee Type</th>
                                                                        <th>Exact Location</th>
                                                                        <th>Details of Situation</th>
                                                                        <th>Cause Of Incident</th>
                                                                        <th>Action Taken</th>
                                                                        <th>Reported By</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div id="app" className="container py-0">
                    <div>
                        <button type="button" className="btn btn-info btn-sm safety" data-toggle="modal" data-target="#reportSafetyObservation"><i className="fas fa-file-lines mr-2"></i> Report Safety Observation</button>
                    </div>
                    <div className="py-0">
                        <div className="modal" id="reportSafetyObservation">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Report Safety Observation</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="" method="">
                                            <div className="row">
                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="Name">Name</label>
                                                    <input className="form-control" id="Name" type="text" name="name" placeholder="Enter your name"/>
                                                    <small className="form-text text-muted">Provide full name of the person who is intimating.</small>
                                                </div>
                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="contact">Contact No.</label>
                                                    <input className="form-control" id="contact" name="contact" type="tel" placeholder="Enter contact no."/>
                                                    <small className="form-text text-muted">Provide contact no of the same person.</small>
                                                </div>
                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="specify">Specify(If Not An Employee)</label>
                                                    <input className="form-control" id="specify" type="text" name="specify" placeholder="Others" readOnly/>
                                                    <small className="form-text text-muted">Provide details if others, Other Stakeholders, or contractor.</small>
                                                </div>
                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="date_time">Date & Time Of Observation</label>
                                                    <input className="form-control" type="datetime-local" name="date_time" placeholder="DD/MM/YY HH:MM"/>
                                                </div>
                                                
                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="riskCategory">Risk Category</label>
                                                    <select className="form-select" id="riskCategory" name="riskCategory">
                                                        <option selected>Choose Risk Category</option>
                                                        <option>High High</option>
                                                        <option>High</option>
                                                        <option>Moderate</option>
                                                    </select>
                                                    <small className="form-text text-muted">Fatality risk category notifies to HOD directly.</small>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="targetDate">Target Date (As Per Policy):</label>
                                                    <input className="form-control" id="targetDate" type="datetime-local" name="targetDate" placeholder="DD/MM/YY HH:MM" readOnly/>
                                                    <small className="form-text text-muted">Target Date set automatically as per Risk Category.</small>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="unit">Unit</label>
                                                    <select className="form-select" id="unit" name="unit">
                                                        <option value="">Choose Unit</option>
                                                        <option value="1-ANG">Angul</option>
                                                        <option value="4-BBL">Barbil</option>
                                                        <option value="9-DCP">DCPP</option>
                                                        <option value="8-GUR">Gurugaon</option>
                                                        <option value="6-NAL">Nalwa</option>
                                                        <option value="7-PAT">Patratau</option>
                                                        <option value="11-PUN">Punjipatra</option>
                                                        <option value="3-RGH">Raigarh</option>
                                                        <option value="5-RAP">Raipur</option>
                                                        <option value="2-JPL">Tamnar</option>
                                                        <option value="10-TEN">Tensa</option>
                                                    </select>
                                                    <small className="form-text text-muted">Select the Unit at which incident happen</small>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="Department">Department</label>
                                                    <select className="form-select" id="Department" name="Department" required="">
                                                        <option value="">Choose Department</option>
                                                        <option value="214" hod="Col. Sachit Suri" email="sachit.suri@jindalsteel.com">Administration</option>
                                                        <option value="53" hod="Asad Quraishi" email="asad.quraishi@jindalsteel.com">Angul-Information Technology</option>
                                                        <option value="54" hod="Shivnath Ram" email="shivnath.ram@jindalsteel.com">Asset Management</option>
                                                        <option value="90" hod="Brig DB Pany" email="db.pany@jindalsteel.com">Aviation</option>
                                                        <option value="74" hod="Mrinal Kalra" email="mrinal.kalra@jindalsteel.com">Bar Mill</option>
                                                        <option value="75" hod="Nadeem Khan" email="nadeem.khan@jindalsteel.com">Blast Furnace</option>
                                                        <option value="220" hod="Suresh Kumar Singla" email="suresh.singla@jindalsteelodisha.com">Blast Furnace Project</option>
                                                        <option value="219" hod="Vikas Goel" email="vikas.goel@jindalsteelodisha.com">Caster Project</option>
                                                        <option value="211" hod="K.K Mishra" email="kamlesh.mishra@jindalsteelodisha.com">CDQ Project</option>
                                                        <option value="55" hod="Paluru Ramesh" email="paluru.ramesh@jindalsteel.com">Central Civil &amp; Structural Maint. Dept.</option>
                                                        <option value="56" hod="Somappa Biradar" email="somappa.biradar@jindalsteel.com">Central Crane Maintenance</option>
                                                        <option value="209" hod="Ramakant Gupta" email="ramakant.gupta@jindalsteel.com">CENTRAL ELECTRICAL</option>
                                                        <option value="57" hod="Rajesh Kumar" email="rajesh.kumar2@jindalsteel.com">Central HVAC &amp; AC</option>
                                                        <option value="58" hod="Somappa Biradar" email="somappa.biradar@jindalsteel.com">Central Maintenance Department</option>
                                                        <option value="59" hod="Bichitra Nanda Swain" email="bichitra.swain@jindalsteel.com">Central Raw Material Handling System</option>
                                                        <option value="60" hod="Chittaranjan Dash" email="chittaranjan.dash@jindalsteel.com">Central Refractory</option>
                                                        <option value="202" hod="Deepak Mohanty" email="deepak.mohanty@jindalsteel.com">CHP</option>
                                                        <option value="63" hod="Paluru Ramesh" email="paluru.ramesh@jindalsteel.com">Civil - Infra</option>
                                                        <option value="61" hod="Awadhesh Narayan Tiwari" email="awadhesh.tiwari@jindalsteel.com">Coal gasification plant</option>
                                                        <option value="64" hod="Deepak Mohanty" email="deepak.mohanty@jindalsteel.com">Coal Washery</option>
                                                        <option value="76" hod="Vishwesh Madhukar Shisani" email="vishwesh.shisani@jindalsteel.com">Coke Oven and By Product Plant</option>
                                                        <option value="89" hod="Shyam Maheshwari" email="shyam.maheshwari@jindalsteel.com">COMMERCIAL,FINANCE &amp; ACCOUNTS</option>
                                                        <option value="91" hod="Raj Kumar Chawla" email="raj.kumar@jindalsteel.com">CONTRACT CELL</option>
                                                        <option value="65" hod="Anurag Tripathi" email="anurag.tripathi@jindalsteel.com">Cross Country Pipe Line</option>
                                                        <option value="92" hod="Puspa Lata Satapathy" email="puspa.satapathy@jindalsteel.com">CSR</option>
                                                        <option value="66" hod="Rajendra Kumar Makkad" email="rajendra.makkad@jindalsteel.com">DRI</option>
                                                        <option value="201" hod="Hridayeshwar Jha" email="hriday.jha@jindalsteel.com">ED Secreteriate</option>
                                                        <option value="68" hod="Alok Kumar Sahu" email="alok.sahu@jindalsteel.com">Environment Management Dept.</option>
                                                        <option value="93" hod="Joseph JM Peeris" email="joseph.peeris@jindalsteel.com">HR &amp; Employee Services</option>
                                                        <option value="206" hod="Dinesh kumar Tripathi" email="dinesh.tripathi@jindalsteelodisha.com">HSM Project</option>
                                                        <option value="69" hod="Ravi Shankar" email="ravi.shankar@jindalsteel.com">Industrial Engineering</option>
                                                        <option value="94" hod="Manoj Kumar Mishra" email="manoj.mishra@jindalsteel.com">Internal Audit</option>
                                                        <option value="95" hod="Suresh Kumar Sharma" email="suresh.sharma@jindalsteel.com">Liaison &amp; Public Relation</option>
                                                        <option value="70" hod="Chandra Bhan Prasad" email="chandra.prasad@jindalsteelodisha.com">Lime &amp; Dolomite (O &amp; M)</option>
                                                        <option value="71" hod="Pratim Dutta" email="pratim.dutta@jindalsteel.com">Logistics</option>
                                                        <option value="72" hod="Manoj Kumar Mishra" email="manoj.mishra@jindalsteel.com">Management Assurance and Audit System</option>
                                                        <option value="96" hod="Dr. Sanjeev Kumar Dwivedi" email="sanjeev.dwivedi@jindalsteel.com">Medical Department</option>
                                                        <option value="73" hod="Ramamohana Rao Chindiri" email="ramamohana.chindiri@jindalsteel.com">Oxygen Plant</option>
                                                        <option value="215" hod="Samir Kanti De" email="samir.de@jindalsteel.com">Oxygen Plant Project</option>
                                                        <option value="207" hod="K. Shiva Shankara" email="shiva.k@jindalsteelodisha.com">Pellet Plant</option>
                                                        <option value="81" hod="Yogesh M Patel" email="yogeshbhai.patel@jindalsteel.com">Plate Mill - O&amp;M</option>
                                                        <option value="82" hod="Gautam Mazumdar" email="gautam.mazumdar@jindalsteel.com">Power Plant</option>
                                                        <option value="97" hod="Devendra Kumar Verma" email="devendra.verma@jindalsteel.com">Production Planning &amp; Control</option>
                                                        <option value="98" hod="Akshaya Kumar Misra" email="akshaya.misra@jindalsteel.com">Purchase</option>
                                                        <option value="83" hod="Santosh Kumar Mallik" email="santosh.mallik@jindalsteel.com">Railway Siding</option>
                                                        <option value="20286" hod="Ashish Kumar Singh" email="ashish.singh@jindalsteelodisha.com">RMHS Project</option>
                                                        <option value="84" hod="Rajesh kumar Sinha" email="rajesh.sinha@jindalsteel.com">Safety </option>
                                                        <option value="78" hod="Paritosh Haldar" email="paritosh.haldar@jindalsteel.com">Sinter Plant</option>
                                                        <option value="79" hod="Anurag Tripathi" email="anurag.tripathi@jindalsteel.com">Slurry Pipeline</option>
                                                        <option value="85" hod="Atul Dubey" email="atul.dubey@jindalsteel.com">Steel Melting Shop -  O&amp;M</option>
                                                        <option value="86" hod="Sundar Raturi" email="sundar.raturi@jindalsteel.com">Stores</option>
                                                        <option value="87" hod="Subhash Jain" email="subhash.jain@jindalsteel.com">Structural Steel Division</option>
                                                        <option value="88" hod="Vishwanathan N" email="vishwanathan.nagarajan@jindalsteel.com">Technical Services Department</option>
                                                        <option value="203" hod="Brig DB Pany" email="db.pany@jindalsteel.com">Township</option>
                                                        <option value="99" hod="Bhuwan Pratap" email="bhuwan.pratap@jindalsteel.com">TQM</option>
                                                        <option value="80" hod="devesh.goel@angul.jspl.com" email="devesh.goel@jindalsteel.com">Utility</option>
                                                        <option value="199" hod="Sujan Sarkar" email="sujan.sarkar@jindalsteelodisha.com">Utility-Projects</option>
                                                        <option value="200" hod="Anil Gupta" email="anil.gupta1@jindalsteel.com">VPSA</option>
                                                    </select>
                                                    <small className="form-text text-muted">Select the department at which incident happen.</small>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="Section">Section</label>
                                                    <select className="form-select" id="Section" name="Section" required="">
                                                        <option value="">Choose Section</option>
                                                    </select>
                                                    <small className="form-text text-muted">Select the section of the department.</small>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="LineManager">JSPL Line Manager</label>
                                                    <select className="form-select" id="LineManager" name="LineManager" required="">
                                                        <option value="">Choose Line Manager</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="deptHod">Department HOD</label>
                                                    <input className="form-control" id="deptHod" type="text" name="deptHod" placeholder="Dept HOD" readOnly/>
                                                </div>

                                                <div className="col-md-4 form-group mb-3">
                                                    <label for="secHead">Section Head</label>
                                                    <input className="form-control" id="secHead" type="text" name="secHead" placeholder="Section Head" readOnly/>
                                                </div>

                                                <div className="col-md-6 form-group mb-3">
                                                    <label for="exactLocation">Exact Location Of The Observation</label>
                                                    <input className="form-control" id="exactLocation" type="text" name="exactLocation" placeholder="Exact Location Of The Observation"/>
                                                </div>

                                                <div className="col-md-6 form-group mb-3">
                                                    <label for="empType">Employee Type:</label>
                                                    <div className="ul-form__radio-inline mt-2">
                                                        <label className="ul-radio__position radio radio-primary form-check-inline">
                                                            <input type="radio" name="radio" value="0"/><span className="ul-form__radio-font">Employee</span><span className="checkmark"></span>
                                                        </label>
                                                        <label className="ul-radio__position radio radio-primary">
                                                            <input type="radio" name="radio" value="0"/><span className="ul-form__radio-font">Contractor</span><span className="checkmark"></span>
                                                        </label>
                                                        <label className="ul-radio__position radio radio-primary">
                                                            <input type="radio" name="radio" value="0"/><span className="ul-form__radio-font">Others</span><span className="checkmark"></span>
                                                        </label>
                                                        <label className="ul-radio__position radio radio-primary">
                                                            <input type="radio" name="radio" value="0"/><span className="ul-form__radio-font">Other Stakeholders</span><span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 form-group mb-3">
                                                    <label for="briefDesc">Brief Description</label>
                                                    <textarea className="form-control" id="briefDesc" type="text" name="briefDesc" placeholder="Brief Description"></textarea>
                                                </div>

                                                <div className="col-md-6 form-group mb-3">
                                                    <label for="suggest">Suggestions For Prevention (If Any)</label>
                                                    <textarea className="form-control" id="suggest" type="text" name="suggest" placeholder="Provide Suggestions For Prevention"></textarea>
                                                </div>

                                                <div className="form-group col-md-12">
                                                    <label className="ul-form__label">Atleast one should be checked from the below 4 options 1. Unsafe Act and 2. Unsafe Condition, 3. Safe Act and 4. Safe Condition</label>
                                                    <div className="ul-form__radio-inline row">
                                                        <div className="col-md-3">
                                                            <div className="card checklist">
                                                                <div className="card-heading">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Unsafe Act</span><span className="checkmark"></span>
                                                                        <small className="form-text text-muted">Atleast one textbox should be filled otherwise click the checkbox to disable all below fields.</small>                                                                                                                              
                                                                    </label>
                                                                </div>
                                                                
                                                                <div className="card-body">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Operating Without Authority</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Failure To Warn</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Deviation From Standard Practice/Procedure</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Use Of Unsafe/Substandard Equipment/Tool</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Improper Placing/Stacking/Positioning</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Improper Loading</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Working On/Servicing Moving Machinery</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Wearing Substandard PPEs</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Using PPEs Incorrectly</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Games/Horseplay</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Attention Distracted</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Failure To Secure/Make Safe</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Operating At Improper Speed</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Rules/Regulations Ignored</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Unsafe Use/Improper Application Of Equipment/Tools</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Improper Mixing</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Taking Up Unsafe Position</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Failure To Wear PPE</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Improper Handling/Lifting</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Rendering Safety Device Inoperative</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Other (Specify)</span><span className="checkmark"></span>                                                                                              
                                                                    </label>
                                                                </div>
                                                            </div>                                                            
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="card checklist">
                                                                <div className="card-heading">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Unsafe Condition</span><span className="checkmark"></span>
                                                                        <small className="form-text text-muted">Atleast one textbox should be filled otherwise click the checkbox to disable all below fields.</small>                                                                                                                              
                                                                    </label>
                                                                </div>
                                                                
                                                                <div className="card-body">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Inadequate Warning Systems</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Defective Protective Devices</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Lighting Substandard</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>No/Inadequate Personal Protection</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Substandard Material</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Inadequate Ventilation</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Inadequate Protective Device</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Excessive Emissions</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Substandard/Defective Tools/Equipment</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Hazardous Arrangement/Layout/Disorder</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Surface Substandard</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Hazardous Environmental Conditions</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Congestion/Restriction</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Natural Hazards</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Fire/Explosion Hazards</span><span className="checkmark"></span>                                                                                              
                                                                    </label>
                                                                    
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Other (Specify)</span><span className="checkmark"></span>                                                                                              
                                                                    </label>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="card checklist">
                                                                <div className="card-heading">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Safe Act</span><span className="checkmark"></span>
                                                                        <small className="form-text text-muted">Atleast one textbox should be filled otherwise click the checkbox to disable all below fields.</small>                                                                                                                              
                                                                    </label>
                                                                </div>
                                                                
                                                                <div className="card-body">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Operating With Authority</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Warning Signages Displayed</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Obey Standard Practice/Procedure</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Use Of Unsafe/Substandard Equipment/Tool</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Use Of Standard Equipment/Tool</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Proper Placing/Stacking/Positioning</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Proper Loading</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Wearing Standard PPEs</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>USE PPEs Correctly</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Secure/Make Safe</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Operating With Proper Speed</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Proper Application Of Equipment/Tools</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Obey Rules And Regulations</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Wear PPE</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Others</span><span className="checkmark"></span>                                                                                              
                                                                    </label>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="card checklist">
                                                                <div className="card-heading">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Safe Condition</span><span className="checkmark"></span>
                                                                        <small className="form-text text-muted">Atleast one textbox should be filled otherwise click the checkbox to disable all below fields.</small>                                                                                                                              
                                                                    </label>
                                                                </div>
                                                                
                                                                <div className="card-body">
                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Adequate Warning Systems</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Protective Devices</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Lighting Standard</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Adequate Personal Protection</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Standard Material</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Adequate Ventilation</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Adequate Protective Device</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Standard/ Tools/Equipment</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Good Arrangement/Layout/Disorder</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Surface Standard</span><span className="checkmark"></span>                                                                                              
                                                                    </label>

                                                                    <label className="checkbox checkbox-info">
                                                                        <input type="checkbox"/><span>Others</span><span className="checkmark"></span>                                                                                              
                                                                    </label>
                                                                </div>
                                                            </div> 
                                                        </div>   
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

            <div className="sidebar-overlay open"></div>
            <div className="flex-grow-1"></div>
            <div className="app-footer">
                <div className="footer-bottom d-flex justify-content-center align-items-center">
                    <div className="align-items-center">
                        <div>
                            <p className="m-0">&copy;
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> Jindal Steel & Power | All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
      
    </div>
  )
}

export default SafetyObservation
