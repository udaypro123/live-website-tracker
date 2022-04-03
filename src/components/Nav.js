import React from 'react';

import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row" >
                    <div id="menu" className="col-md-8 col-xm-12">
                        
                         <Navbar/>

                    </div>
                    <div id="menuu" className="col-md-4 col-xm-12">

                   
                        
                    <Link className="menuL" to="sign"> Sign in</Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav;
