import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Admin/Table';
import APagination from '@/Components/Admin/Pagination';
import CatHierarchy from '@/Components/Admin/CatHierarchy';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';

const Categories = ({ categories }) => {
    const { flash } = usePage().props;

    return (

        <AdminLayout title="Categorias">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Categorias",
                        'icon': <IoGridOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Categorias', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="categories.create" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="categories.index" placeholder="Buscar por categoria" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Categoria</ATh>
                                    <ATh>Slug</ATh>
                                    <ATh>Parent</ATh>
                                    <ATh>Postagens</ATh>
                                    <ATh>Ativa</ATh>
                                    <ATh></ATh>
                                </ATr>
                                <CatHierarchy data={categories} catid={null} />
                            </ATable>
                        </div>
                    </BoxContent>
                    {APagination &&
                        <BoxFooter>
                            <APagination data={categories} />
                        </BoxFooter>
                    }
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Categories;