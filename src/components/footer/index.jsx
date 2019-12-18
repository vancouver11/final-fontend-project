import React from 'react';
import Logo from '../logo';
import CopyWrite from './components/copyWrite';
import Nav  from '../nav';


function Footer(props) {
    return (
        <footer className="footer_area clearfix">
            <div className="container">
                <div className="row align-items-center">
                   {/*  <!-- Single Widget Area --> */}
                    <div className="col-12 col-lg-4">
                        <div className="single_widget_area">
                            <Logo type="forFooter"/>
                            <CopyWrite/>
                        </div>   
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="single_widget_area">
                            <Nav type="gorizontal" />
                         </div>
                    </div>

                </div>
            </div>
        </footer>
      );
}
 
export default Footer ;