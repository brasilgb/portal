import React, { Fragment, useRef, useState } from 'react'
import { IconContext } from 'react-icons';
import { IoSearch } from 'react-icons/io5';
import { useForm, usePage } from '@inertiajs/inertia-react'

export const FormSearch = ({ placeholder, url }) => {
    const { auth } = usePage().props;
    const { data, setData, post, get, processing, errors } = useForm({
        q: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        get(route(url));
    }

    return (
        <Fragment>

            <div className='w-1/3 pl-2 shadow-sm rounded bg-white border border-gray-200'>
                <form onSubmit={handleSubmit}>

                    <div className="flex items-center">

                        <button
                            type="submit"
                            disabled={processing}
                        >
                            <IconContext.Provider value={{ className: "text-xl text-gray-400" }}>
                                <IoSearch />
                            </IconContext.Provider>
                        </button>

                        <input
                            disabled={auth.user.role === 1 ? true : false}
                            name="search"
                            value={data.q}
                            onChange={(e) => setData('q', e.target.value)}
                            className="w-full p-2 border-0 bg-transparent focus:ring-0 text-gray-400"
                            type="search"
                            placeholder={placeholder}
                            autoComplete="off"
                        />
                    </div>
                </form>
            </div>

        </Fragment>
    )
}