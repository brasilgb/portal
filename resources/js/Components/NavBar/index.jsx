import React, { Fragment, useContext, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoNotificationsCircleSharp, IoPersonCircleSharp, IoLogOutOutline } from 'react-icons/io5';

const NavBar = () => {

    const [showDropDownNotifi, setShowDropDownNotifi] = useState(false);
    const [showDropDownUser, setShowDropDownUser] = useState(false);
    return (
        <Fragment>
            <nav id="header" className="z-2 top-10 py-1 bg-white shadow md:ml-64 border-b dark:bg-gray-900 dark:border-gray-700">
                <div className="w-full flex items-center justify-between mt-0 px-2 py-0">
                    <div></div>
                    <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
                    </div>

                    <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                        <div className="auth flex items-center w-full md:w-full">
                            <div className="">
                                <button
                                    onClick={() => setShowDropDownNotifi(!showDropDownNotifi)}
                                >
                                    <IconContext.Provider value={{ size: "1.9rem", className: "text-gray-600 dark:text-gray-200" }}>
                                        <IoNotificationsCircleSharp />
                                    </IconContext.Provider>
                                </button>
                                <div className={`${showDropDownNotifi ? 'block' : 'hidden'} absolute right-1 z-2 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-900`}>

                                    <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar" />
                                        <div className="mx-1">
                                            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                                        </div>
                                    </a>

                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                            <div className="px-4">
                                <button
                                    onClick={() => setShowDropDownUser(!showDropDownUser)}
                                >
                                    <IconContext.Provider value={{ size: "1.9rem", className: "text-gray-600 dark:text-gray-200" }}>
                                        <IoPersonCircleSharp />
                                    </IconContext.Provider>
                                </button>
                                <div className={`${showDropDownUser ? 'block' : 'hidden'} absolute right-1 z-2 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-900`}>

                                    <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar" />
                                        <div className="mx-1">
                                            <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p>
                                        </div>
                                    </a>

                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 font-medium transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <div className='flex items-center'>
                                            <IconContext.Provider value={{ size: "1.2rem", className: "text-gray-600 mr-4 font-medium" }}>
                                                <IoLogOutOutline />
                                            </IconContext.Provider>
                                            <span>Sair do sistema</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;