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
              background: 'bg-gradient-to-b from-blue-900 to-transparent !min-h-[200px] md:min-h-[400px] uppercase'
            }}
          />

        <section className="md:w-4/6 mx-auto mt-10 py-4 px-4">
          <h5 className="text-center text-2xl font-bold pb-4 uppercase text-blue-700 drop-shadow-md">{ post?.summary }</h5>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </section>
        </SiteLayout>
    </Fragment>
  )
}

export default Posts;