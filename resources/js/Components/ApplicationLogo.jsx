import { usePage } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

export default function ApplicationLogo({ className }) {
    const { settings } = usePage().props
    return (
        <Fragment>
            <img className={className} src={`/uploads/${settings?.logo ? settings?.logo : 'default.png'}`} alt={settings?.title} />
        </Fragment>
    );
}
