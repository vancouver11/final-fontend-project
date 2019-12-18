import React from 'react';

function Pagination(props) {
    return (  
        <div class="col-12">
            {/* <!-- Pagination --> */}
            <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                    <li className="page-item active"><a class="page-link" href="#">01.</a></li>
                    <li className="page-item"><a class="page-link" href="#">02.</a></li>
                    <li className="page-item"><a class="page-link" href="#">03.</a></li>
                    <li className="page-item"><a class="page-link" href="#">04.</a></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Pagination;