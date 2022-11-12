import { Link } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'
import { IconContext } from 'react-icons';
import { IoHome } from 'react-icons/io5';

export const BoxMain = ({ children }) => {
    return (
        <Fragment>
            <div className="px-8 animate__animated animate__fadeIn">
                {children}
            </div>
        </Fragment>
    )
}

export const BoxSup = ({ titleTop, breadcumb }) => {
    return (
        <Fragment>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center justify-start">
                    <IconContext.Provider value={{ className: "text-2xl text-gray-500" }}>
                        <div>
                            {titleTop[0].icon}
                        </div>
                    </IconContext.Provider>
                    <h1 className="ml-2 text-gray-500 text-2xl">{titleTop[0].title}</h1>
                </div>
                <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap">
                    <Link
                        href={'/admin'}
                    >
                        <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                            <div className="pr-1">
                                <IoHome />
                            </div>
                        </IconContext.Provider>
                    </Link>
                    {breadcumb[0].value != 'Home' &&
                        <span className={breadcumb[0].url === '/admin' ? 'hidden' : 'mx-1 text-gray-500 dark:text-gray-300'}>/</span>
                    }

                    {breadcumb.map((bc, index) => (
                        <span key={index}>
                            {bc.url
                                ?
                                <>
                                    <Link
                                        className="text-blue-600 pr-2 dark:text-blue-400 hover:underline"
                                        href={bc.url}
                                    >
                                        {bc.value}
                                    </Link>
                                    <span className={`${bc.separator === '' ? 'mx-0 text-gray-500 dark:text-gray-300' : ''}`}>{bc.separator}</span>
                                </>
                                :
                                <>
                                    <span className="text-gray-600 pl-2">{bc.value == 'Home' ? '' : bc.value}</span>
                                    <span className={`${bc.separator === '' ? 'mx-0 text-gray-500 dark:text-gray-300' : ''}`}>{bc.separator}</span>
                                </>
                            }
                        </span>

                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export const BoxContainer = ({ children }) => {
    return (
        <Fragment>
            <div className="rounded-md shadow bg-white border border-gray-300">
                {children}
            </div>
        </Fragment>
    )
}

export const BoxHeader = ({ children }) => {
    return (
        <Fragment>
            <div className="flex items-center justify-between border-b border-gray-100 py-2 px-4">
                {children}
            </div>
        </Fragment>
    )
}

export const BoxContent = ({ children }) => {
    return (
        <Fragment>
            <div className="p-4">
                {children}
            </div>
        </Fragment>
    )
}

export const BoxFooter = ({ children }) => {
    return (
        <Fragment>
            <div className="border-t border-gray-100 px-4">
                {children}
            </div>
        </Fragment>
    )
}

