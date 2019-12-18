import React from 'react';
import SocialButton from './btn'


function ContainSocialBtn(props) {

    const classBtns = {
        pinterest: 'pinterest',
        instagram: 'instagram',
        facebook: 'facebook',
        twitter: 'twitter',
    }

    return ( 
        <div className="social-info d-flex justify-content-between">
            <SocialButton classBtn = {classBtns.pinterest}/>
            <SocialButton classBtn = {classBtns.instagram}/>
            <SocialButton classBtn = {classBtns.facebook}/>
            <SocialButton classBtn = {classBtns.twitter}/>
        </div>
     );
}
 
export default ContainSocialBtn;