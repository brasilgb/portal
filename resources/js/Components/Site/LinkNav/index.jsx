import { Link } from '@inertiajs/inertia-react'
import React, { Fragment } from 'react'

const LinkNav = ({ children, category, slug, onClick, className }) => {
    return (
        <Fragment>
            {category.sub_categories.length === 0
                ?
                <Link
                    href={slug}
                    className={className}
                >
                    {children}
                </Link>
                :
                <Link
                    type="button"
                    as="button"
                    onClick={onClick}
                    className={className}
                >
                    {children}
                </Link>
            }
        </Fragment>
    )
}

export default LinkNav