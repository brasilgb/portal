import React, { Fragment } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                
                    <Fragment>
                        <div>
                            <Link
                                href="/">
                                <ApplicationLogo className="w-36 h-36 fill-current rounded-full text-gray-500 mx-auto my-4" />
                            </Link>
                        </div>

                        <div>
                            {children}
                        </div>
                    </Fragment>
                
            </div>
        </div>
    );
}
