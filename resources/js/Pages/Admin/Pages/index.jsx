import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage';

const Pages = ({ pages }) => {
    const { flash } = usePage().props;

    return (

        <AdminLayout title="Páginas">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Páginas",
                        'icon': <IoGridOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Páginas', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="pages.create" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="pages.index" placeholder="Buscar por postagem" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Title</ATh>
                                    <ATh>Slug</ATh>
                                    <ATh>Resumo</ATh>
                                    <ATh></ATh>
                                </ATr>
                                {pages.data.map((page, index) => (
                                    <Fragment key={index}>
                                        <ATr header={false}>
                                            <ATd>{page.id}</ATd>
                                            <ATd>{page.title}</ATd>
                                            <ATd>{page.slug}</ATd>
                                            <ATd>
                                                {page.summary}
                                            </ATd>
                                            <ATd>
                                                <div className="flex items-center justify-end">
                                                    <div className="mr-1">
                                                        <ButtonEdit url={route('pages.edit', page.id)} />
                                                    </div>
                                                    <div className="ml-1">
                                                        <ButtonDelete url="pages.destroy" param={page.id} tipo="esta página" />
                                                    </div>
                                                </div>
                                            </ATd>
                                        </ATr>
                                    </Fragment>
                                ))}
                            </ATable>
                        </div>
                    </BoxContent>
                    {APagination &&
                        <BoxFooter>
                            <APagination data={pages} />
                        </BoxFooter>
                    }
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Pages;