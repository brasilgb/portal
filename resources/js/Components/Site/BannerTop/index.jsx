import React, { Fragment } from 'react'

const BannerTop = ({ children, padAll, bgImage }) => {
  return (
    <Fragment>
        <div className={`${padAll} bg-[url('/uploads/${bgImage}')]  w-full bg-scroll bg-left bg-cover max-w-[100%] h-auto`} >
            {children}
        </div>
    </Fragment>
  )
}

export default BannerTop;