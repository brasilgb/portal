import React, { Fragment } from 'react';
import BannerTop from '@/Components/Site/BannerTop';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';

const Posts = ({ post }) => {
  return (
    <Fragment>
        <SiteLayout>
        <Head title="Home" />
          <BannerTop
            dataConfig={{
              className: "",
              image: post.featured,
              title: post.title,
              summary: '',
              background: 'bg-gradient-to-b from-blue-900 via-blue-800 to-transparent !h-[8rem] md:!h-[15rem] uppercase'
            }}
          />

        </SiteLayout>
    </Fragment>
  )
}

export default Posts;