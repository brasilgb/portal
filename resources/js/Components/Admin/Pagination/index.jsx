import React, { Fragment } from 'react';
import { Link } from '@inertiajs/inertia-react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const APagination = ({ data }) => {

    const clearLinks = [...data.links];
    clearLinks.shift();
    clearLinks.pop();

    return (
        <Fragment>
            {data.total > data.per_page &&
                <div className="flex py-2">
                    {data.prev_page_url &&
                        <Link
                            href={data.prev_page_url}
                            className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            <IoChevronBackOutline />  Anterior
                        </Link>
                    }

                    {clearLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={
                                link.active ?
                                    "flex items-center px-4 py-2 mx-1 bg-blue-500 text-white transition-colors duration-200 transform rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                                    :
                                    "flex items-center px-4 py-2 mx-1 bg-white text-gray-700 transition-colors duration-200 transform rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
                            }>
                            {link.label}
                        </Link>
                    ))}

                    {data.next_page_url &&
                        <Link
                            href={data.next_page_url}
                            className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                            Próximo <IoChevronForwardOutline />
                        </Link>
                    }
                </div>
            }
        </Fragment>
    )
}

export default APagination;