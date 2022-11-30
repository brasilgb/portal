import React, { Fragment } from 'react'
import { IconContext } from 'react-icons';
import { HiOutlineInformationCircle } from 'react-icons/hi2';

const FlashMessage = ({ message }) => {
    return (
        <Fragment>
            <div className="flex items-center bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700 border border-green-200">
                <IconContext.Provider value={{ className: "text-xl text-green-700" }}>
                    <HiOutlineInformationCircle />
                </IconContext.Provider>
                <div>
                    <span className="font-medium">{message}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default FlashMessage;