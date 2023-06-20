import React from 'react';
import './navbar.css';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='nav_head'>
        <DiCssdeck size="3rem"/><span>Portfolio</span>
        </div>
        <div className='nav_list'>
            <ul className='list_view'>
                <li><a href="#Home" style={{color:'inherit',textDecoration:'none'}}>Home</a></li>
                <li><a href="#Projects" style={{color:'inherit',textDecoration:'none'}}>Projects</a></li>
                <li><a href="#Internship" style={{color:'inherit',textDecoration:'none'}}>Internships</a></li>
            </ul>
            <div>
                <a href="https://github.com/kunna67" target='_blank' style={{color:'inherit'}}><AiFillGithub size="3rem"/></a>
                <a href="https://www.linkedin.com/in/kunnal-bansal-75273a207/" target='_blank' style={{color:'inherit'}}><AiFillLinkedin size="3rem"/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;