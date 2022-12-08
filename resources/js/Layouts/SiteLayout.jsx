import React, { Fragment } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/inertia-react';
import SiteNavbar from '@/Components/Site/SiteNavBar';
import SiteFooter from '@/Components/Site/SiteFooter';

const SiteLayout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title>My app</title>
                <meta head-key="description" name="description" content="This is the default description" />
                <link rel="icon" type="image/svg+xml" href="/favicon.png" />
            </Head>
            <main className="font-Roboto min-h-screen flex bg-gray-50">
                <div className='flex flex-col w-full'>
                    <SiteNavbar />
                    <div className="flex-grow">
                        {children}
                    </div>
                    <SiteFooter />
                </div>
            </main>
        </Fragment>
    );
}
export default SiteLayout;