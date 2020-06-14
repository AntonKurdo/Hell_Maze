import React from 'react';

export default function ({isDayMode}) {
    console.log(isDayMode)
    return (
        <footer className={isDayMode ? 'footer' : 'footer footer_night'}>
            <div className='footer_img'>
                <img src='https://static.tildacdn.com/tild6335-6464-4433-b637-303934383839/zoub1wL7Zo0-3.jpg' />
            </div>
            <div className='footer_author'>
                created by <a href='https://github.com/AntonKurdo' target='_blank'>
                     Anton Kurdo
                </a>
            </div>
        </footer>
    )
}
