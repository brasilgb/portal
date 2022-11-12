import { Link } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'
import { IconContext } from 'react-icons';
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';

export const ButtonNew = ({ url, icon, value }) => {

    return (
        <Fragment>

            <Link
                href={route(url)}
                className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md shadow-md transition-colors duration-300 transform"
            >
                <IconContext.Provider value={{ className: "text-xl text-gray-50 text-white" }}>
                    {icon}
                </IconContext.Provider>
                <h1 className="text-md text-gray-50 hover:text-white">{value}</h1>
            </Link>

        </Fragment>
    )
}

export const ButtonEdit = ({ url }) => {
    return (
        <Fragment>

            <Link
                href={route(url)}
                className="flex items-center py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-md shadow-md transition-colors duration-300 transform"
            >
                <IconContext.Provider value={{ className: "text-xl text-gray-50 text-white" }}>
                    <IoCreateOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">Editar</h1>
            </Link>

        </Fragment>
    )
}

export const ButtonDelete = ({ url }) => {
    return (
        <Fragment>

            <Link
                href={route(url)}
                className="flex items-center py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md shadow-md transition-colors duration-300 transform"
            >
                <IconContext.Provider value={{ className: "text-xl text-gray-50 text-white" }}>
                    <IoTrashOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">Excluir</h1>
            </Link>

        </Fragment>
    )
}
