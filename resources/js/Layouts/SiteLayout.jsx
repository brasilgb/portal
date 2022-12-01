import React, { Fragment } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import SiteNavbar from '@/Components/Site/SiteNavBar';
import SiteFooter from '@/Components/Site/SiteFooter';

const SiteLayout = ({ children }) => {
    return (
        <Fragment>
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