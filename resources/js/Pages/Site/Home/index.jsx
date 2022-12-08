import BannerTop from '@/Components/Site/BannerTop';
import Section from '@/Components/Site/Section';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const Home = ({ sections, categories }) => {
  // console.log(sections.section1);
  return (
    <SiteLayout>
      <Head title="Home" />
      {categories
        .filter((s) => (s.id === sections.section1))
        .map((category) => (
          
          <BannerTop padAll={'md:py-0 py-10'} bgImage={category.posts[0].featured}>
            <div className="md:container mx-auto ">
              <div className="flex items-center flex-col justify-center h-[25rem] bg-blue-800 bg-opacity-60">
                <h1 className="font-bold text-6xl text-white">{category.posts[0].title}</h1>
                <p className="font-semibold text-xl text-white pt-10 text-center px-20">
                  {category.posts[0].summary}</p>
              </div>

            </div>
          </BannerTop>
        ))}

      <Section bgSection="bg-white">
        section
      </Section>
    </SiteLayout>
  )
}

export default Home;