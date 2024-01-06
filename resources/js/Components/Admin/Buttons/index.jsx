import { Link, useForm } from "@inertiajs/inertia-react";
import React, { Fragment, useState } from "react";
import { IconContext } from "react-icons";
import {
    IoCreateOutline,
    IoTrashOutline,
    IoSaveOutline,
} from "react-icons/io5";
import { HiOutlineInformationCircle, HiTrash } from "react-icons/hi2";

export const ButtonNew = ({ url, icon, value }) => {
    return (
        <Fragment>
            <Link
                href={route(url)}
                className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
            >
                <IconContext.Provider
                    value={{ className: "text-xl text-gray-50 text-white" }}
                >
                    {icon}
                </IconContext.Provider>
                <h1 className="text-md text-gray-50 hover:text-white">
                    {value}
                </h1>
            </Link>
        </Fragment>
    );
};

export const ButtonSave = ({ processing }) => {
    return (
        <Fragment>
            <button
                type="submit"
                className="flex items-center py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
                disabled={processing}
            >
                <IconContext.Provider
                    value={{ className: "text-xl text-gray-50 text-white " }}
                >
                    <IoSaveOutline />
                </IconContext.Provider>
                <div className="text-md ml-2 text-gray-50 hover:text-white">
                    Salvar
                </div>
            </button>
        </Fragment>
    );
};

export const ButtonEdit = ({ url }) => {
    return (
        <Fragment>
            <Link
                href={url}
                className="flex items-center py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-md shadow-md"
            >
                <IconContext.Provider
                    value={{ className: "text-xl text-gray-50 text-white" }}
                >
                    <IoCreateOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">
                    Editar
                </h1>
            </Link>
        </Fragment>
    );
};

export const ButtonDelete = ({ url, param, tipo }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const { delete: destroy } = useForm();

    function onsubmit(e) {
        e.preventDefault();
        destroy(route(url, param));
        setDeleteModal(false);
    }

    return (
        <Fragment>
            <button
                onClick={() => setDeleteModal(true)}
                type="submit"
                className="flex items-center py-2 px-4 bg-red-500 hover:bg-red-600 rounded-md shadow-md"
            >
                <IconContext.Provider
                    value={{ className: "text-xl text-gray-50 text-white" }}
                >
                    <IoTrashOutline />
                </IconContext.Provider>
                <h1 className="text-md ml-1 text-gray-50 hover:text-white">
                    Excluir
                </h1>
            </button>

            {deleteModal && (
                <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
                    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg p-2 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                        <div className="">
                            {/* <!--body--> */}
                            <div className="text-center p-2 flex-auto justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <IconContext.Provider
                                        value={{
                                            className:
                                                "text-lg text-red-500 text-white",
                                        }}
                                    >
                                        <HiOutlineInformationCircle />
                                    </IconContext.Provider>
                                    <IconContext.Provider
                                        value={{
                                            className:
                                                "text-7xl text-red-500 text-white",
                                        }}
                                    >
                                        <HiTrash />
                                    </IconContext.Provider>
                                </div>

                                <h2 className="text-xl font-bold py-4 ">
                                    Têm certeza?
                                </h2>
                                <p className="text-sm text-gray-500 px-8">
                                    Quer excluir {tipo}? Este processo não pode
                                    ser desfeito.
                                </p>
                            </div>
                            <form onSubmit={onsubmit}>
                                <div className="p-3  mt-2 text-center space-x-4 md:block">
                                    <button
                                        onClick={() => setDeleteModal(false)}
                                        className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                                    >
                                        Cancelar
                                    </button>
                                    <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                                        Excluir
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
