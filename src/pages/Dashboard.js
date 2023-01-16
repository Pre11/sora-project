import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div id="app" className="container py-0">
        <div>
            <button type="button" className="btn btn-info btn-sm safety" data-toggle="modal" data-target="#myModal"><i className="fa-regular fa-message"></i> Safety Message</button>
        </div>
        <div className="py-0">
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Safety Message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"> × </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="site-section bg-left-half mb-2">
                                <div className="container owl-2-style">
                          
                                  <div className="owl-carousel owl-2">
                                    <div className="media">
                                      <a href="#"><img src="assets/images/safety_1.jpg" alt="Image" className="img-fluid"/></a>
                                      
                                    </div>
                                    <div className="media">
                                      <a href="#"><img src="assets/images/safety_2.jpg" alt="Image" className="img-fluid"/></a>
                                      
                                    </div>
                                    <div className="media">
                                      <a href="#"><img src="assets/images/safety_1.jpg" alt="Image" className="img-fluid"/></a>
                                      
                                    </div>
                                    <div className="media">
                                        <a href="#"><img src="assets/images/safety_2.jpg" alt="Image" className="img-fluid"/></a>
                                        
                                    </div>
                                </div>
                          
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="app-admin-wrap layout-sidebar-vertical sidebar-full">
        <div className="sidebar-panel">
            <div className="jindal-brand pr-3 text-center mt-4 mb-4 d-flex justify-content-center align-items-center">
                <a href="/">
                    <img className="pl-3" src="assets/images/Jindal logo-light.png" alt="alt" />
                </a>                
            </div>
        
            <div className="scroll-nav ps ps--active-y" data-perfect-scrollbar="data-perfect-scrollbar" data-suppress-scroll-x="true">
                <div className="side-nav">
                    <div className="main-menu">
                        <ul className="metismenu" id="menu">
                            <li className="Ul_li--hover"><a className="active" ><i className="i-Bar-Chart text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">Dashboard</span></a>                               
                            </li>

                            <li className="Ul_li--hover"><a className="has-arrow" ><i className="i-Library text-20 mr-2 text-light"></i><span className="item-name text-15 text-light"><Link to = "/SafetyObservation" ><h7> Safety Observation(PIOs)/Audits </h7></Link></span></a>
                                <ul >
                                    
                                    <li className="item-name"><a href="SafetyObservation.js"><i className="nav-icon i-Letter-Open text-light"></i><span className="item-name text-light">Safety Observation (PIOs)</span></a></li>                                    
                                    <li className="item-name"><a href="line-walk-audit.html"><i className="nav-icon i-File-Clipboard-File--Text text-light"></i><span className="item-name text-light">Line Walk (Individual Audit)</span></a></li>
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">Cross Functional Team Audit</span></a></li>   
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">Group Safety Audit</span></a></li>  
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">FRCP Proactive</span></a></li>    
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">Internal Audit</span></a></li> 
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">External Audit</span></a></li>                              
                                </ul>
                            </li>    

                            <li className="Ul_li--hover"><a href="#"><i className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">Action To Be Taken <span className="outline-round-success px-1 py-1">06</span></span></a>
                            </li>

                            <li className="Ul_li--hover"><a href="my-raised-observ.html"><i className="i-File-Clipboard-File--Text text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">My Raised Observation</span></a>
                               
                            </li>

                            <li className="Ul_li--hover"><a className="has-arrow" href="#"><i className="i-Administrator text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">Admin</span></a>
                                <ul className="mm-collapse">
                                    <li className="item-name"><a href="line-manager-master.html"><i className="nav-icon i-File-Clipboard-Text--Image text-light"></i><span className="item-name text-light">Line Manager Master</span></a></li>
                                    
                                </ul>
                            </li>
                            
                            <li className="Ul_li--hover"><a className="has-arrow" href="#"><i className="i-Double-Tap text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">Help</span></a>
                                <ul className="mm-collapse">
                                    <li className="item-name"><a href=""><i className="nav-icon i-Computer-Secure text-light"></i><span className="item-name text-light">User Manual</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div className="ps__rail-x" style={{left:"0px", bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left:"0px" ,width: "0px"}}></div>
                </div>
                
                <div className="ps__rail-x" style={{left: "0px" , bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left:" 0px " , width: "0px"}}></div>
                </div>
                
            </div>
            
            <div className="text-white mx-2" style={{position: "absolute" , bottom: "0"}}>
                Version 3.0.1
                <br />
                Released On 15th Dec 2022
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
                    
                    <p className="mr-3 mb-0"><i className="fas fa-map-location-dot text-20 cursor-pointer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Location"></i> &nbsp;<strong>Location:</strong> Angul</p>
                    <p className="mr-3 mb-0"><i className="fas fa-building-user text-20 cursor-pointer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Department"></i> &nbsp;<strong>Department:</strong> Angul IT</p>   
                    <p className="mr-3 mb-0"><i className="fas fa-user-plus text-20 cursor-pointer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Logged In As"></i> &nbsp;<strong>Logged In As:</strong> Suraj Kumar Dash</p>
                    <p className="mr-3 mb-0"><i className="fas fa-user-group text-20 cursor-pointer" data-toggle="tooltip" data-placement="top" title="" data-original-title="User Category"></i> &nbsp;<strong>User Category:</strong> LM</p>
                </div>
                <div className="header-part-right">
                  
                    <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen=""></i>
                    
                    <div className="dropdown dropleft">
                        <img className="header-icon" src="assets/images/profile.png"  id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                        
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
                    <h1 className="mr-2">Dashboard</h1>                    
                </div>
                <div className="separator-breadcrumb border-top"></div>
                <div className="row summary mb-3 pb-2">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card-title mb-0 mt-2">Actions To Be Taken (Overdue)
                        </div>
                    </div>
            
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden my-2">
                            <div className="card-body">
                                <img src="assets/images/today.png"/>
                                
                                <div className="content">
                                    <p className="text-danger bold mt-2 mb-0">Overdue 1 Day</p>
                                    <p className="text-danger text-24 line-height-1 mb-2">20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden my-2">
                            <div className="card-body">
                                <img src="assets/images/month.png"/>
                                <div className="content">
                                    <p className="text-danger mt-2 mb-0">Overdue 3 Days</p>
                                    <p className="text-danger text-24 line-height-1 mb-2">40</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden my-2">
                            <div className="card-body">
                                <img src="assets/images/year.png"/>
                                <div className="content">
                                    <p className="text-danger mt-2 mb-0">Overdue 7 Days</p>
                                    <p className="text-danger text-24 line-height-1 mb-2">80</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden my-2">
                            <div className="card-body">
                                <img src="assets/images/pending.png"/>
                                <div className="content">
                                    <p className="text-danger mt-2 mb-0">Overdue 15 Days</p>
                                    <p className="text-danger text-24 line-height-1 mb-2">12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row summary mb-3 pb-2">
                    <div className="col-lg-12 col-md-12 col-sm-12 my-3">
                        <div className="card-title mb-0 mt-2 pull-left">
                            <span>PIOs Summary ( My Raised Observations )</span>
                            <div className="dropdown pull-right" style={{float: "right"}}>
                                <button className="btn btn-primary dropdown-toggle" style={{width: "330px"}} id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PIOs Summary ( My Raised Observations )
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute " , willChange: "transform " , top:" 0px " , left: "-190px" ,transform: "translate3d(0px, -2px, 0px)"}}>
                                    <a className="dropdown-item" href="#">PIOs Summary ( All Department )</a>
                                    <a className="dropdown-item" href="#">PIOs Summary ( My Department )</a>
                                    <a className="dropdown-item" href="#">PIOs Summary ( My Raised Observations )</a>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 mb-3">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/today-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Today's Cases</h4><span>Total: 32</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/month-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Current Month</h4><span>Total: 302</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/year-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Current Year</h4><span>Total: 35242</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/pending-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Pending Cases</h4><span>Total: 30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                             
                </div>                
                <div className="row summary py-4 mb-3">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="card-title mb-2">PIOs Summary ( All Department )
                                    <div className="dropdown pull-right mx-2" style={{float: "right"}}>
                                        <button className="btn bg-secondary text-white dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year-2022
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute " , willChange: "transform" ,top:" 0px " , left: "-190px " , transform: "translate3d(0px, -2px, 0px)"}}>
                                            <a className="dropdown-item" href="#">2022</a>
                                            <a className="dropdown-item" href="#">2021</a>
                                            <a className="dropdown-item" href="#">2020</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/today-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Act</h4><span>Total: 32</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/month-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Condition</h4><span>Total: 302</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/year-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Act</h4><span>Total: 160</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-secondary text-white">
                                            <img className="card-img mr-2" src="assets/images/pending-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Condition</h4><span>Total: 30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="card-title mb-2">PIOs Summary ( My Department )
                                    <div className="dropdown pull-right mx-2" style={{float: "right"}}>
                                        <button className="btn bg-info text-white dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year-2022
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute", willChange: "transform", top:" 0px", left: "-190px", transform: "translate3d(0px, -2px, 0px)"}}>
                                            <a className="dropdown-item" href="#">2022</a>
                                            <a className="dropdown-item" href="#">2021</a>
                                            <a className="dropdown-item" href="#">2020</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-info text-white">
                                            <img className="card-img mr-2" src="assets/images/today-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Act</h4><span>Total: 32</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-info text-white">
                                            <img className="card-img mr-2" src="assets/images/month-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Condition</h4><span>Total: 302</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-info text-white">
                                            <img className="card-img mr-2" src="assets/images/year-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Act</h4><span>Total: 160</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-info text-white">
                                            <img className="card-img mr-2" src="assets/images/pending-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Condition</h4><span>Total: 30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 my-3">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="card-title mb-2">PIOs Summary ( My Raised Observations )
                                    <div className="dropdown pull-right mx-2" style={{float: "right"}}>
                                        <button className="btn bg-primary text-white dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year-2022
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute " , willChange: "transform " , top: "0px", left: "-190px", transform: "translate3d(0px, -2px, 0px)"}}>
                                            <a className="dropdown-item" href="#">2022</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-primary text-white">
                                            <img className="card-img mr-2" src="assets/images/today-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Act</h4><span>Total: 32</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-primary text-white">
                                            <img className="card-img mr-2" src="assets/images/month-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Safe Condition</h4><span>Total: 302</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-primary text-white">
                                            <img className="card-img mr-2" src="assets/images/year-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Act</h4><span>Total: 160</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                        <div className="p-4 rounded d-flex align-items-center bg-primary text-white">
                                            <img className="card-img mr-2" src="assets/images/pending-light.png" />
                                            <div>
                                                <h4 className="text-13 mb-1 text-white">Unsafe Condition</h4><span>Total: 30</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="card-title">                                    
                                    <span>Year Wise PIOs Review ( Angul-All Department )</span>
                                    <div className="dropdown pull-right mx-2" style={{float: "right"}}>
                                        <button className="btn btn-primary dropdown-toggle" style={{th: "200px", id:"dropdownMenuwidButton", type :"button" , dataToggle:"dropdown" , ariaHaspopup:"true" , ariaExpanded:"false"}}>
                                            Angul-All Department
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute", willChange: "transform " , top: "0px " , left: "-190px" , transform: "translate3d(0px, -2px, 0px)"}}>
                                            <a className="dropdown-item" href="#">Angul-All Department</a>
                                            <a className="dropdown-item" href="#">Angul-IT</a>
                                            <a className="dropdown-item" href="#">Angul-HR</a>
                                            <a className="dropdown-item" href="#">Angul-SMS</a>
                                            <a className="dropdown-item" href="#">Angul-BF</a>
                                            <a className="dropdown-item" href="#">Angul-COBPP</a>
                                            <a className="dropdown-item" href="#">Angul-CIVIL</a>
                                            <a className="dropdown-item" href="#">Angul-SINTER</a>
                                            <a className="dropdown-item" href="#">Angul-PLATE MILL</a>
                                            <a className="dropdown-item" href="#">Angul-BAR MILL</a>
                                        </div>
                                    </div>
                                    <div className="dropdown pull-right mx-2" style={{float: "right"}}>
                                        <button className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Year-2022
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="top-start" style={{position: "absolute " , willChange: "transform " , top: "0px " , left: "-190px" , transform: "translate3d(0px, -2px, 0px)"}}>
                                            <a className="dropdown-item" href="#">2022</a>
                                            <a className="dropdown-item" href="#">2021</a>
                                            <a className="dropdown-item" href="#">2020</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div id="echartBar" style={{height: "300px"}}>

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
                            <p className="m-0">&copy; <script>
                                document.write(new Date().getFullYear())
                              </script> Jindal Steel & Power | All Rights Reserved.</p>                            
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>

    </div>
  )
}

export default Dashboard
