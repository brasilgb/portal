import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const SiteFooter = () => {
  const { settings } = usePage().props;

  const addressSplit = ((val) => {
    let x;
    return val.split('|').map((a, i) => {
      for (x = i + 1; x < a.length; x++) {
        return <h1 key={i} className={`text-xs md:text-sm text-gray-50`}>{a}</h1>
      }
    })
  })

  return (
    <Fragment>
      <section className="py-10 px-8 md:px-0 bg-solar-blue-200">
        <div className="flex items-center justify-between md:w-4/6 mx-auto">


          <div className="">
            <img className="h-12 md:h-24" src="/uploads/grupo-solar.jpg" alt="" />
          </div>
          <div>
            <h1 className="text-sm md:text-xl text-gray-50 border-b mb-2">Endereço</h1>
            {addressSplit(settings?.address)}
          </div>


        </div>
      </section>
      <footer className="md:flex flex-col items-center justify-center py-2 border-t border-white shadow-lg">
        <p className="text-xs text-gray-800  dark:text-gray-200 text-center">&copy;{new Date().getFullYear()} {settings?.description}. Todos os direitos reservados</p>
      </footer>
    </Fragment>
  )
}

export default SiteFooter;