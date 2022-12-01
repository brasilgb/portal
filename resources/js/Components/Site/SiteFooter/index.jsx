import { usePage } from '@inertiajs/inertia-react';
import React from 'react'

const SiteFooter = () => {
    const { settings } = usePage().props;
  return (
    <footer className="md:flex flex-col items-center justify-center px-2 py-20 border-t border-gray-100 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50  shadow-lg">
    <p className="text-xs text-gray-800  dark:text-gray-200 text-center">&copy;{ new Date().getFullYear() } { settings?.title }. Todos os direitos reservados</p>
</footer>
  )
}

export default SiteFooter;