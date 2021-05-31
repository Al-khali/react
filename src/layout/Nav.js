import React from 'react'
import { NavLink } from "react-router-dom";

const navs = [
    {
        path:'/',
        name:'Home'
    },
    {
        path:'/about',
        name:'About'
    },
    {
        path:'/Blog',
        name:'Blog'
    },
    {
        path:'/resume',
        name:'Resume'
    },
    {
        path:'/contact',
        name:'Contact'
    },
]

const logo = "khalid"

const newLogo = logo.split('').reverse().join('').toUpperCase()

const Nav = () => (
    <nav className="bg-gray-900 text-white p-8 shadow flex justify-between items-center ">
        <div className="">
            {newLogo}
        </div>
        <ul  className="flex space-x-5 justify-end ">
            {navs.map((navItem)=>(
                <li>
                    <NavLink
                        exact
                        to={navItem.path}
                        activeClassName='border-b-2 border-white'
                    >
                        {navItem.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav