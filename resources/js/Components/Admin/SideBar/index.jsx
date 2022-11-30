import React, { Fragment, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoMdMenu } from 'react-icons/io';
import { IoClose, IoCog, IoDocumentsOutline, IoDocumentTextOutline, IoGridOutline, IoHomeOutline, IoPersonSharp } from 'react-icons/io5';
import { Link, usePage } from '@inertiajs/inertia-react';

const SideBar = () => {
    const { settings } = usePage().props;
    const [showSide, setShowSide] = useState(false);

    return (

        <Fragment>
            <div className="absolute md:hidden z-0 pt-2 px-2">
                <label htmlFor="menu-toggle" className="cursor-pointer block dark:text-gray-200">
                    <button
                        onClick={() => setShowSide(!showSide)}
                    >
                        <IconContext.Provider value={{ className: "text-2xl" }}>
                            {showSide
                                ? <IoClose />
                                : <IoMdMenu />
                            }
                        </IconContext.Provider>
                    </button>

                </label>
            </div>

            <div className={`ease-in-out duration-300 ${showSide ? 'translate-x-0' : '-translate-x-64 md:translate-x-0'} fixed md:flex flex-col w-64 h-screen py-2 bg-white border-r dark:bg-gray-900 dark:border-gray-700 shadow`}>
                {/* <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mt-6 md:mt-0">Brand</h2> */}

                <div className="flex flex-col items-center mt-2 -mx-2">
                    <Link
                        as="button"
                        type="button"
                        href="/"
                    >
                        <img className="w-28 h-28 mx-2 rounded-full bg-gray-100" src={`/uploads/${settings.logo ? settings.logo : 'default.png'}`} alt={settings.title} />
                    </Link>

                    <h4 className="mx-2 mt-2 font-normal text-gray-800 dark:text-gray-200 hover:underline">{settings.title}</h4>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <Link
                            as="button"
                            type="button"
                            href={route('admin')}
                            className={`w-full flex items-center px-4 py-2 mt-4 transition-colors duration-300 transform 
                            ${route().current('admin')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoHomeOutline />
                                </div>
                            </IconContext.Provider>

                            <span className="mx-4 font-normal">Início</span>
                        </Link>

                        <Link
                            as="button"
                            type="button"
                            href={route('categories.index')}
                            className={`w-full flex items-center px-4 py-2 mt-4 transition-colors duration-300 transform 
                            ${route().current('categories*')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoGridOutline />
                                </div>
                            </IconContext.Provider>

                            <span className="mx-4 font-normal">Categorias</span>
                        </Link>

                        <Link
                            as="button"
                            type="button"
                            href={route('posts.index')}
                            className={`w-full flex items-center px-4 py-2 mt-4 transition-colors duration-300 transform 
                            ${route().current('posts*')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoDocumentTextOutline />
                                </div>
                            </IconContext.Provider>

                            <span className="mx-4 font-normal">Postagens</span>
                        </Link>

                        <Link
                            as="button"
                            type="button"
                            href={route('pages.index')}
                            className={`w-full flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700
                            ${route().current('pages*')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoDocumentsOutline />
                                </div>
                            </IconContext.Provider>

                            <span className="mx-4 font-normal">Páginas</span>
                        </Link>

                        <Link
                            as="button"
                            type="button"
                            href={route('settings.index')}
                            className={`w-full flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700
                            ${route().current('settings*')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoCog />
                                </div>
                            </IconContext.Provider>

                            <span className="mx-4 font-normal">Configurações</span>
                        </Link>

                        <Link
                            as="button"
                            type="button"
                            href={route('users.index')}
                            className={`w-full flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700
                            ${route().current('users*')
                                    ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"}
                            `}>
                            <IconContext.Provider value={{ className: "text-xl" }}>
                                <div>
                                    <IoPersonSharp />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Usuários</span>

                        </Link>

                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default SideBar;


