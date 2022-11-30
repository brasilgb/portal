import React, { Fragment } from 'react'

const Overlay = ( {sHidenShow, closeDropdown} ) => {
  return (
    <Fragment>
        <div onClick={ closeDropdown } className={`${sHidenShow ? 'block' : 'hidden'} fixed top-0 right-0 bottom-0 left-0 bg-slate-400 bg-opacity-10`}></div>
    </Fragment>
  )
}

export default Overlay;