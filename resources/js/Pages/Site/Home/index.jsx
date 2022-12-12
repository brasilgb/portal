import BannerTop from '@/Components/Site/BannerTop';
import Section from '@/Components/Site/Section';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const Home = ({ sections, categories }) => {


  return (
    <SiteLayout>
      <Head title="Home" />
      {categories
        .filter((s) => (s.id === sections.section1))
        .map((category, i) => (

          <BannerTop key={i}
            dataConfig={{
              className: "",
              image: category.posts[0].featured,
              title: category.posts[0].title,
              summary: category.posts[0].summary,
              background: 'bg-gradient-to-b from-blue-900 via-blue-800 to-transparent'
            }}
          />
        ))}

      <Section titleShow={false} classSection="bg-white py-4" section={sections.section2} categories={categories} classPosts="border-0 text-center h-full" />
      <Section titleShow={true} classSection="bg-gray-100 py-4" section={sections.section3} categories={categories} classPosts="border border-gray-200 rounded-md hover:shadow-lg bg-gray-50 h-full" />
      <Section titleShow={true} classSection="bg-white py-4" section={sections.section4} categories={categories} classPosts="border border-gray-100 rounded-md hover:shadow-lg h-full" />
      <Section titleShow={true} classSection="bg-white py-4" section={sections.section5} categories={categories} classPosts="border border-gray-100 rounded-md hover:shadow-lg h-full" />

    </SiteLayout>
  )
}

export default Home;