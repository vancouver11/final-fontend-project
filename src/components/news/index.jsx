import React from 'react';
import Newsletter from './components/news-letter-form'

function News(props) {
    return (  
        <section className="newsletter-area section-padding-100-0">
        <div className="container">
            <div className="row align-items-center">
                {/* <!-- Newsletter Text --> */}
                <div className="col-12 col-lg-6 col-xl-7">
                    <div className="newsletter-text mb-100">
                        <h2>Subscribe for a <span>25% Discount</span></h2>
                        <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                    </div>
                </div>
                
                <Newsletter/>
            </div>
        </div>
    </section>

    );
}
 
export default News;