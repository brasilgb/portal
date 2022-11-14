import { Link, useForm } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';

export const ButtonNew = ({ url, icon, value }) => {

    return (
        <Fragment>

            <Link
                href={route(url)}
                className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
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
                href={url}
                className="flex items-center py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-md shadow-md"
            >
                <IconContext.Provider value={{ className: "text-xl text-gray-50 text-white" }}>
                    <IoCreateOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">Editar</h1>
            </Link>

        </Fragment>
    )
}

export const ButtonDelete = ({ url, category }) => {

    const [deleteModal, setDeleteModal] = useState(false);
    const { delete: destroy } = useForm();

    function onsubmit(e) {
        e.preventDefault();
        destroy(route(url, category));
    }

    return (
        <Fragment>

            <button
                onClick={() => setDeleteModal(true)}
                type="submit"
                className="flex items-center py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md shadow-md"
            >
                <IconContext.Provider value={{ className: "text-xl text-gray-50 text-white" }}>
                    <IoTrashOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">Excluir</h1>
            </button>

            {deleteModal &&
                <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                    <div className="bg-white px-16 py-14 rounded-md text-center">
                        <h1 className="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
                        <form onSubmit={onsubmit}>
                            <button
                            onClick={() => setDeleteModal(false)}
                                className="bg-red-500 px-4 py-2 rounded-md text-md text-white">
                                Cancel
                            </button>
                            <button type="submit" className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Ok</button>
                        </form>
                    </div>
                </div>
            }

        </Fragment>
    )
}
