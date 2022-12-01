import React, { Fragment } from 'react'

const Section = ({ children, bgSection }) => {
    return (
        <Fragment>
            <div className={`${bgSection}`}>
                <div className="container m-auto">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Section;