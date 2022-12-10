import BannerTop from '@/Components/Site/BannerTop';
import Section from '@/Components/Site/Section';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const Home = ({ sections, categories }) => {

  const limitText = ((texto, max) => {
    let el = texto.length > max ? '...' : '';
    return texto.substr(0, max) + el;
  })
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

      <Section bgSection="bg-white px-8 md:px-0">
        {categories
          .filter((s2) => (s2.id === sections.section2))
          .map((category, icategory) => (
            <div key={icategory} className="md:w-5/6 mx-auto pt-10">

              <div className="border-b border-gray-200 pb-3">
                <h1 className="text-2xl font-bold text-gray-700">
                  {category.name}
                </h1>
              </div>
              <div className="grid md:grid-cols-3 gap-10 py-4">
                {category.posts.map((post, ipost) => (
                  <div key={ipost} className="border border-gray-100 rounded-md hover:shadow-lg">

                    <img
                      className="rounded-t-md"
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
                ))}
              </div>
            </div>
          ))}
      </Section>

    </SiteLayout>
  )
}

export default Home;