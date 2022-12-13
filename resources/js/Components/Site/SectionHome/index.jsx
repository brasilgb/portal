import { Link } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const SectionHome = ({ section, categories, classSection, classPosts, titleShow }) => {

    const limitText = ((texto, max) => {
        let el = texto.length > max ? '...' : '';
        return texto.substr(0, max) + el;
    });

    return (
        <Fragment>
            <section className={`${classSection} px-8 md:px-0`}>
                {categories.filter((s2) => (s2.id === section))
                    .map((category, icategory) => (
                        <div key={icategory} className="md:w-4/6 mx-auto">

                            {titleShow &&
                                <div className="border-b border-gray-200 pb-3">
                                    <h1 className="text-2xl font-bold text-gray-700">
                                        {category.name}
                                    </h1>
                                </div>
                            }

                            <div className="grid md:grid-cols-3 gap-10 py-4 h-full">
                                {category.posts.map((post, ipost) => (
                                    <Fragment key={ipost}>
                                        <Link
                                            href={route('post', [category.slug, post.slug])}
                                            className=""
                                        >
                                            <div className={`${classPosts}`}>

                                                <img
                                                    className="rounded-t-md mx-auto"
                                                    src={`/uploads/${post.featured}`}
                                                    alt=""
                                                />
                                                <div className="w-full pt-6 px-5 pb-5">
                                                    <h4 className="text-gray-600 text-lg font-bold mb-2">
                                                        {post.title}
                                                    </h4>
                                                    <div dangerouslySetInnerHTML={{ __html: limitText(post.summary, 250) }} />
                                                </div>
                                            </div>
                                        </Link>
                                    </Fragment>

                                ))}
                            </div>

                        </div>
                    ))}
            </section>
        </Fragment>
    )
}

export default SectionHome;