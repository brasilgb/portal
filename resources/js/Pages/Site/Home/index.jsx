import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const Home = () => {
  return (
    <SiteLayout>
        <Head title="Home" />
        <div>
            Home
        </div>
    </SiteLayout>
  )
}

export default Home;