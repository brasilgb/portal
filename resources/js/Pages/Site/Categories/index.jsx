import React, { Fragment } from 'react';
import BannerTop from '@/Components/Site/BannerTop';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import Section from '@/Components/Site/SectionHome';
import SectionCategory from '@/Components/Site/SectionCategory';

const Categories = ({ category }) => {

  return (
    <Fragment>
      <SiteLayout>
        <Head title="Home" />

        <BannerTop
          dataConfig={{
            className: "",
            image: category.posts.length > 0 ? category.posts[0].featured : '',
            title: category.name,
            summary: '',
            background: 'bg-gradient-to-b from-blue-900 to-transparent !h-[8rem] md:!h-[15rem]'
          }}
        />

        <SectionCategory titleShow={false} classSection="bg-white py-4" category={category} classPosts="border border-gray-200 rounded-md hover:shadow-lg bg-gray-50 h-full" />

      </SiteLayout>
    </Fragment>
  )
}

export default Categories;