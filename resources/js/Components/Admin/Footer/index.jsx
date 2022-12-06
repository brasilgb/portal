import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

const Footer = () => {
  const { settings } = usePage().props;
  return (
    <Fragment>
      <footer className="md:flex flex-col items-center justify-center px-2 py-1 border-t border-gray-200 dark:bg-gray-900 bg-gray-50 shadow-lg md:ml-64">
        <p className="text-xs text-gray-800  dark:text-gray-200 text-center">&copy;{new Date().getFullYear()} {settings?.description}. Todos os direitos reservados.</p>
      </footer>
    </Fragment>
  )
}

export default Footer;