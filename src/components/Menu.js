import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
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
                            <li className="Ul_li--hover"><a className="active" ><i className="i-Bar-Chart text-20 mr-2 text-light"></i><span className="item-name text-15 text-light"><Link to = "/" ><h7>     Dashboard </h7> </Link></span></a>                               
                            </li>
                            <li className="Ul_li--hover"><a className="has-arrow" href="#"><i className="i-Library text-20 mr-2 text-light"></i><span className="item-name text-15 text-light">Safety Observation(PIOs) / Audits</span></a>
                                <ul >
                                    <li className="item-name"><a href="#"><i className="nav-icon i-Letter-Open text-light"></i><span className="item-name text-light"><Link to = "/SafetyObservation" ><h7> Safety Observation(PIOs)/Audits </h7></Link></span></a></li>                                    
                                    <li className="item-name"><a href="line-walk-audit.html"><i className="nav-icon i-File-Clipboard-File--Text text-light"></i><span className="item-name text-light">Line Walk (Individual Audit)</span></a></li>
                                    <li className="item-name"><a href="#" ><i className="nav-icon i-Receipt text-light"></i><span className="item-name text-light">Cross Functional Team Audit</span></a></li>   
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
                <div className="ps__rail-x" style={{left: "0px" , bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                <div className="ps__rail-y" style={{top: "0px", height: "404px " , right: "0px"}}>
                    <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "325px"}}></div>
                </div>
                <div className="ps__rail-x" style={{left: "0px ",bottom: "0px"}}>
                    <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                <div className="ps__rail-y" style={{top: "0px" , height: "404px ", right: "0px"}}>
                    <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "325px"}}></div>
                    <div className="text-white mx-2" style={{position: "absolute", bottom: "0"}}>
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
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Menu
