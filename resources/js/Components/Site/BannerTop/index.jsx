import React, { Fragment } from 'react'

const BannerTop = ({ children, padAll }) => {
  return (
    <Fragment>
        <div className={`${padAll} bg-[url('/uploads/header.jpg')]  w-full bg-scroll bg-left bg-cover max-w-[100%] h-auto`} >
            {children}
        </div>
    </Fragment>
  )
}

export default BannerTop;