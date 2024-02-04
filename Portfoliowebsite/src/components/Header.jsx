import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";

function Header() {
    return (
        <>
        <div className='bg-slate-600 py-3 px-2 flex flex-row'>
            <div className='pl-2 flex flex-row gap-1'>
            <div className='text-slate-700'>Abhay</div>
            <div className='text-white'>Pratap Singh</div>    
            </div>
                <ul className='flex flex-row gap-4 px-[12rem] text-white'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li className='flex flex-row gap-1 '><FaLinkedin /> Linkdin </li>
                    <li className='flex flex-row gap-1'><FaGithubSquare /> Github</li>
                </ul>
                <button className='flex flex-row'><MdContactEmergency /><span className='text-white'>Contact me</span></button>
        </div>
        </>
    )
}

export default Header
