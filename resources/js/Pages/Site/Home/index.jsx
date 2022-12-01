import BannerTop from '@/Components/Site/BannerTop';
import Section from '@/Components/Site/Section';
import SiteLayout from '@/Layouts/SiteLayout';
import { Head } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react'

const Home = () => {
  return (
    <SiteLayout>
      <Head title="Home" />

      <BannerTop padAll={'md:py-36 py-10'}>
        <div className="md:container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-6xl text-white">Grupo Solar - Portal LGPD</h1>
          <p className="font-semibold text-xl text-white pt-10 text-center px-20">Nosso compromisso, além de oferecer um excelente serviço é cuidar muito bem dos dados pessoais de nossos clientes, o sigilo pessoal das informações está garantido. Estamos adequados com a LGPD.</p>
        </div>
      </BannerTop>

      <Section bgSection="bg-white">
        section
      </Section>
    </SiteLayout>
  )
}

export default Home;