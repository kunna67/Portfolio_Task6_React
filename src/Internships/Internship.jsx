import React from 'react';
import './internship.css';
import google  from '../assests/certificate.PNG';
import geek from '../assests/Olym Peak.PNG';

const Internship = () => {
    const data = [
        { id: 1, img: google, title: "FlipKart Grid" },
        { id: 2, img: geek, title: "Olym Peak" },

    ]
    return (
        <div className='intern_container' id='Internship'>
            <div className='intern_head'>
                <span>Personal Achievements</span>
            </div>
            <div className='intern_wrap' style={{position:'relative'}}>
                {data.map((value, i) => (
                    <div className='intern_details'>
                        <div className='intern_img'>
                            <img src={value.img} alt="internship" />
                        </div>
                        <span>{value.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Internship