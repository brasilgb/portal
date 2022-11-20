import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';
import CatHierarchy from '@/Components/CatHierarchy';

const Categories = ({ categories }) => {

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
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Categoria</ATh>
                                    <ATh>Slug</ATh>
                                    <ATh>Parent</ATh>
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