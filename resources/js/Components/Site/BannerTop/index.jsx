import React, { Fragment } from 'react'

const BannerTop = ({ dataConfig }) => {
  return (
    <Fragment>
      <div className={`${dataConfig.className} w-full bg-scroll md:bg-left bg-cover max-w-[100%] h-auto`} 
      style={{
        backgroundImage: `url('/uploads/${dataConfig.image}')`,
        backgroundPosition: 'bottom',
        backgroundColor: '#1E40AF',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
      }}
      >
        <div className="mx-auto">
          <div className={`flex items-center flex-col justify-center h-[20rem] md:h-[25rem] ${dataConfig.background} text-center`}>
            <h1 className="font-bold text-2xl md:text-6xl text-white">{dataConfig.title}</h1>
            <p className="font-medium md:text-xl text-white pt-10 text-center px-5 md:px-20">
              {dataConfig.summary}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default BannerTop;