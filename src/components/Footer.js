import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({isDayMode}) {
       return (
        <footer className={isDayMode ? 'footer' : 'footer footer_night'}>
            <div className='footer_img'>
                <img src='https://static.tildacdn.com/tild6335-6464-4433-b637-303934383839/zoub1wL7Zo0-3.jpg' alt='TMS_logo'/>
            </div>
            <div className='footer_author'>
                created by <a href='https://github.com/AntonKurdo' target='_blank' rel="noopener noreferrer">
                     Anton Kurdo
                </a>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    isDayMode: PropTypes.bool.isRequired
}


