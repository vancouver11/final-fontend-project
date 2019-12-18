
import React from 'react';

function Sorting(props) {
    return (  
<div className="product-sorting d-flex">
    <div className="sort-by-date d-flex align-items-center mr-15">
        <p>Sort by</p>
        <form action="#" method="get">
            <select name="select" id="sortBydate">
                <option value="value">Date</option>
                <option value="value">Newest</option>
                <option value="value">Popular</option>
            </select>
        </form>
    </div>
    <div className="view-product d-flex align-items-center">
        <p>View</p>
        <form action="#" method="get">
            <select name="select" id="viewProduct">
                <option value="value">12</option>
                <option value="value">24</option>
                <option value="value">48</option>
                <option value="value">96</option>
            </select>
         </form>
    </div>
</div>

    );
}
 
export default Sorting ;








