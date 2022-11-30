import React, { Fragment } from 'react'

export const ATable = ({ children }) => {
    return (
        <Fragment>
            <table className="min-w-full table-auto">
                {children}
            </table>
        </Fragment>
    )
}

export const ATr = ({ children, header }) => {
    return (
        <Fragment>
            {header
                ?
                <thead>
                    <tr>
                        {children}
                    </tr>
                </thead>
                :
                <tbody>
                    <tr>
                        {children}
                    </tr>
                </tbody>
            }
        </Fragment>
    )
}

export const ATh = ({ children }) => {
    return (
        <Fragment>
            <th className="px-2 py-2 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 tracking-wider">
                {children}
            </th>
        </Fragment>
    )
}

export const ATd = ({ children }) => {
    return (
        <Fragment>
            <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                {children}
            </td>
        </Fragment>
    )
}
