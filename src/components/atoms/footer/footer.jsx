import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>Adveture Trails FD</p>
            <div className='footer_img'>
                <i className="fab fa-instagram"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>

            </div>
        </div>
    );
}

export default Footer;
