import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import SideBar from '@/Components/SideBar';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

const AdminLayout = ({ children, title }) => {
    return (
        <Fragment>
            <Head title={title} />
            <main className="font-Roboto min-h-screen flex bg-gray-50">
                <SideBar />
                <div className='flex flex-col w-full'>
                    <NavBar />
                    <div className="flex-grow md:pl-64">
                        {children}
                    </div>
                    <Footer />
                </div>
            </main>

        </Fragment>
    )
}

export default AdminLayout;