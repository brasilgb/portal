import { Link } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const SectionCategory = ({ category, classSection, classPosts, titleShow }) => {

    const limitText = ((texto, max) => {
        let el = texto.length > max ? '...' : '';
        return texto.substr(0, max) + el;
    });

    return (
        <Fragment>
            <section className={`${classSection} px-8 md:px-0`}>
                        <div className="md:w-4/6 mx-auto pt-10">

                            {titleShow &&
                                <div className="border-b border-gray-200 pb-3">
                                    <h1 className="text-2xl font-bold text-gray-700">
                                        {category.name}
                                    </h1>
                                </div>
                            }

                            <div className="grid md:grid-cols-3 gap-10 h-full">
                                {category.posts.map((post, ipost) => (
                                    <Link
                                        href={route('post', [category.slug, post.slug])}
                                        className=""
                                    >
                                        <div key={ipost} className={`${classPosts}`}>

                                            <img
                                                className="rounded-t-md mx-auto"
                                                src={`/uploads/${post.featured}`}
                                                alt=""
                                            />
                                            <div className="w-full pt-6 px-5 pb-5">
                                                <h4 className="text-gray-600 text-lg font-bold mb-6">
                                                    {post.title}
                                                </h4>
                                                <p className='textlimit text-gray-600'>{limitText(post.summary, 150)}</p>
                                            </div>
                                        </div>
                                    </Link>

                                ))}
                            </div>

                        </div>
            </section>
        </Fragment>
    )
}

export default SectionCategory;