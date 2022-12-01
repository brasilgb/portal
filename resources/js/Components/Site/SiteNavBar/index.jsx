import { Link, usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

const SiteNavbar = () => {

    const { auth, settings, categories, pages } = usePage().props;

    const [menuCategoryOpen, setMenuCategoryOpen] = useState([false, false]);

    const openLink = (e, slug) => {
        e.preventDefault();
        Inertia.get(route('categoria', slug));
    };

    const toggleSubMenu = (e, i) => {
        e.preventDefault();
        const clone = menuCategoryOpen.slice(0)
        const newState = clone.map((val, index) => {
            if (index === i) {
                return val
            }
            return false
        })
        newState[i] = !newState[i]
        setMenuCategoryOpen(newState)
    };

    return (
        <Fragment>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link
                        title={settings?.title ? settings?.title : ''}
                        href="/"
                        className="flex items-center"
                    >
                        <img src={`/uploads/${settings?.logo ? settings?.logo : 'default.png'}`} className="h-6 mr-3 sm:h-9 rounded-full" alt={settings?.title ? settings?.title : ''} />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </Link>
                    <div className="flex md:order-2">

                        <div>
                            <Link
                                as="button"
                                type="button"
                                href={auth.user ? route('admin') : route('login')}
                                className="flex px-6 pt-2.5 pb-2 bg-blue-600 hover:bg-blue-700 border border-blue-700 hover:border-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <span>{auth.user ? 'Painel de controle' : 'Login'}</span>
                            </Link>
                        </div>

                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">

                            {categories
                                .filter((p) => (p.parent === null))
                                .map((category, i) => (

                                    <li key={i} className="relative z-10 block focus:outline-none">

                                        <Link
                                            // href="#"
                                            onClick={(e) => (category.sub_categories.length == 0
                                                ? openLink(e, category.slug)
                                                : toggleSubMenu(e, i))}
                                            className="block py-2 pl-3 pr-4 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0"
                                            aria-current="page"
                                        >
                                            <div className="flex items-center">
                                                <span>{category.name}</span>
                                                {menuCategoryOpen[i]
                                                    ? <IoCaretUp size={14} className="text-gray-500" />
                                                    : <IoCaretDown size={14} className="text-gray-500" />
                                                }

                                            </div>

                                        </Link>
                                        <ul className={`${menuCategoryOpen[i] ? 'block' : 'hidden'} absolute top-6 -left-16 mt-2 py-2 w-48 bg-gray-50 rounded-b shadow-lg z-20 border border-gray-100 border-t border-t-blue-500`}>
                                            {categories
                                                .filter((c) => (c.parent === category.id))
                                                .map((category2, inndexC2) => (
                                                    <li key={inndexC2}>
                                                        <Link
                                                            href=''
                                                            className="block px-4 py-2 text-sm capitalize text-gray-700 font-normal"
                                                        >
                                                            {category2.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                ))}

                        </ul>
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            {pages.map((page, indexP) => (

                                <li key={indexP}>

                                    <Link
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                        aria-current="page"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default SiteNavbar;