import AdminLayout from '../../../Layouts/AdminLayout';
import React, { Fragment } from 'react';
import { IoGridOutline, IoHome } from 'react-icons/io5';
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import { IconContext } from 'react-icons';

const HomeAdmin = ({ categories, posts, pages, users }) => {
  return (
    <AdminLayout title="Home">
      <BoxMain>
        <Fragment>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center justify-start">
              <IconContext.Provider value={{ className: "text-2xl text-gray-500" }}>
                <div>
                  <IoHome />
                </div>
              </IconContext.Provider>
              <h1 className="ml-2 text-gray-500 text-2xl">Início</h1>
            </div>
          </div>

          <div className='grid md:grid-cols-4 gap-4'>

            <div className='bg-sky-500 rounded-md shadow-md border border-white'>
              <h1 className='border-b border-sky-600 text-gray-50 px-4 py-2 text-xl textshadown'>Categorias</h1>
              <div className='flex items-center justify-end px-4 py-4'>
                <span className='text-6xl font-bold  text-gray-200 textshadown'>{categories}</span>
              </div>
            </div>

            <div className='bg-red-500 rounded-md shadow-md border border-white'>
              <h1 className='border-b border-red-600 text-gray-50 px-4 py-2 text-xl textshadown'>Postagens</h1>
              <div className='flex items-center justify-end px-4 py-4'>
                <span className='text-6xl font-bold  text-gray-200 textshadown'>{posts}</span>
              </div>
            </div>

            <div className='bg-yellow-500 rounded-md shadow-md border border-white'>
              <h1 className='border-b border-yellow-600 text-gray-50 px-4 py-2 text-xl textshadown'>Páginas</h1>
              <div className='flex items-center justify-end px-4 py-4'>
                <span className='text-6xl font-bold  text-gray-50 textshadown'>{pages}</span>
              </div>
            </div>

            <div className='bg-green-500 rounded-md shadow-md border border-white'>
              <h1 className='border-b border-green-600 text-gray-50 px-4 py-2 text-xl textshadown'>Usuários</h1>
              <div className='flex items-center justify-end px-4 py-4'>
                <span className='text-6xl font-bold  text-gray-200 textshadown'>{users}</span>
              </div>
            </div>

          </div>
        </Fragment>
      </BoxMain>
    </AdminLayout>
  )
}

export default HomeAdmin;