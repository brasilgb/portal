import { Link, usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react';
import { IconContext } from 'react-icons';
import { IoCaretDown, IoCaretUp, IoMenu } from 'react-icons/io5';
import LinkNav from '../LinkNav';

const SiteNavbar = () => {

    const { auth, settings, categoriesMenu, pagesMenu } = usePage().props;

    const [openMenu, setOpenMenu] = useState(false);
    const [menuCategoryOpen, setMenuCategoryOpen] = useState([false, false]);

    const openLink = (e, slug) => {
        e.preventDefault();
        href = { slug };
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

            <nav className="bg-white border-gray-200 py-1 md:py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto z-10 shadow-md md:shadow-none">
                    <Link
                        title={settings?.title ? settings?.title : ''}
                        href="/"
                        className="flex items-center"
                    >
                        <img src={`/uploads/${settings?.logo ? settings?.logo : 'default.png'}`} className="h-8 md:h-12 ml-2 mr-3 rounded-full" alt={settings?.title ? settings?.title : ''} />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </Link>
                    <div className="flex md:order-2">


                        <div className="hidden md:block">
                            <Link
                                as="button"
                                type="button"
                                href={auth.user ? route('admin') : route('login')}
                                className="flex px-6 pt-2.5 pb-2 bg-red-500 hover:bg-red-600 border border-red-500 hover:border-red-400 text-white font-medium text-xs leading-normal uppercase rounded focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                <span>{auth.user ? 'Painel de controle' : 'Login'}</span>
                            </Link>
                        </div>

                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="md:hidden inline-flex items-center p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            <IconContext.Provider value={{ className: 'text-2xl' }} >
                                <IoMenu />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className={`flex items-start justify-between w-full md:w-auto md:order-1 bg-gray-200
                    ${openMenu
                            ? 'block absolute top-12 z-0 min-h-screen'
                            : 'md:flex hidden'
                        }`}>
                        <ul className="
                        flex flex-col p-0 md:p-4 mt-0 bg-gray-50 w-[100%]
                        md:rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white 
                        ">

                            {categoriesMenu
                                .filter((p) => (p.parent === null && p.active === 1))
                                .map((category, i) => (

                                    <li key={i} className="relative z-10 block focus:outline-none border-b border-gray-200 md:border-none">

                                        <LinkNav
                                            category={category}
                                            onClick={(e) => toggleSubMenu(e, i)}
                                            slug={route('category', category.slug)}
                                            className="block py-2 pl-4 pr-4 w-full text-gray-700 bg-gray-50 md:rounded md:bg-transparent md:text-gray-600 md:p-0"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{category.name}</span>
                                                {category.sub_categories.length > 0 &&
                                                    (menuCategoryOpen[i]
                                                        ? <IoCaretUp size={14} className="text-gray-500" />
                                                        : <IoCaretDown size={14} className="text-gray-500" />
                                                    )

                                                }

                                            </div>
                                        </LinkNav>

                                        <ul className={`${menuCategoryOpen[i] ? 'block' : 'hidden'} md:absolute md:top-6 -md:left-16 md:mt-2 py-2 md:w-48 bg-gray-50 md:rounded-b md:shadow-lg z-20 border border-gray-100`}>
                                            {categoriesMenu
                                                .filter((c) => (c.parent === category.id))
                                                .map((category2, inndexC2) => (
                                                    <li key={inndexC2}>
                                                        <button
                                                            href={route('category', category.slug)}
                                                            className="block px-4 py-2 text-sm capitalize text-gray-700 font-normal"
                                                        >
                                                            {category2.name}
                                                        </button>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                ))}
                            {pagesMenu.length > 0 &&
                                pagesMenu
                                    .filter((p) => (p.active === 1))
                                    .map((page, indexP) => (

                                        <li key={indexP}>

                                            <Link
                                                href={route('page', page.slug)}
                                                className="block py-2 pl-3 pr-4 w-full text-gray-700 bg-gray-50 md:rounded md:bg-transparent md:text-gray-600 md:p-0"
                                            >
                                                {page.title}
                                            </Link>
                                        </li>
                                    ))}
                            <li className="block md:hidden bg-gray-200">
                                <div className="p-4 flex justify-center">
                                    <Link
                                        as="button"
                                        type="button"
                                        href={auth.user ? route('admin') : route('login')}
                                        className="flex px-6 pt-2.5 pb-2 font-medium text-xs leading-normal uppercase "
                                    >
                                        <span>{auth.user ? 'Painel de controle' : 'Login'}</span>
                                    </Link>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>

        </Fragment>
    )
}

export default SiteNavbar;