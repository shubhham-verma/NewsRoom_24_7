import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from './news.png'

export class Navbar extends Component {
    render() {
        return (
            <div className="fixed w-full">
                <nav className='flex justify-between bg-black h-14'>
                    <div className="logo flex items-center bg-black">
                        <img className='h-6 mt-[0.75rem] mb-3 ml-3 flex justify-start bg-black' src={logo} alt="" />
                        <Link type='button' className='text-xl text-white ml-4 font-serif bg-black ' to='/'>NEWSROOM-24/7</Link>
                    </div>

                    <div className="text text-white " style={{ height: "fit-content" }}>
                        <ul className='flex  text-base '>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black ' to='/business'>Business</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black ' to='/entertainment'>Entertainment</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black ' to='/general'>General</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black ' to='/health'>Health</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black' to='/science'>Science</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black' to='/sports'>Sports</Link></li>
                            <li><Link type='button' className='font-thin text-2xl p-3 hover:cursor-pointer  hover:bg-slate-800 hover:font-normal hover:border-r-2 border-cyan-400 bg-black' to='/technology'>Technology</Link></li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar