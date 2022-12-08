import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoDocumentOutline, IoAdd, IoChevronDownCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Admin/Table';
import APagination from '@/Components/Admin/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { IconContext } from 'react-icons';

const Pages = ({ pages }) => {
    const { flash } = usePage().props;

    return (

        <AdminLayout title="Páginas">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Páginas",
                        'icon': <IoDocumentOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Páginas', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="pages.create" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="pages.index" placeholder="Buscar por página" />
                    </BoxHeader>
                    <BoxContent className="overflow-auto">
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
                                    <ATh>Ativa</ATh>
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
                                                <IconContext.Provider value={{ className: `text-2xl ${page.active ? 'text-green-600' : 'text-red-500'}` }}>
                                                    {page.active
                                                        ? <IoChevronDownCircleSharp />
                                                        : <IoCloseCircleSharp />
                                                    }
                                                </IconContext.Provider>
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