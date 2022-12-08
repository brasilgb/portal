import Footer from '@/Components/Admin/Footer';
import NavBar from '@/Components/Admin/NavBar';
import SideBar from '@/Components/Admin/SideBar';
import { Head, usePage } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

const AdminLayout = ({ children, title }) => {
    const { settings } = usePage().props;
    return (
        <Fragment>
            <Head>
                <title>{settings.title}</title>
                <meta head-key="description" name="description" content="This is the default description" />
                <link rel="icon" type="image/svg+xml" href={`/uploads/${settings.logo}`} />
            </Head>
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