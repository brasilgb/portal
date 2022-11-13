import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';

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
                        <ButtonNew url="categories.adcategory" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="categorias" placeholder="Buscar por categoria" />
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
                                {categories.data.map((category, index) => (
                                    <ATr key={index} header={false}>
                                        <ATd>{category.id}</ATd>
                                        <ATd>{category.name}</ATd>
                                        <ATd>{category.slug}</ATd>
                                        <ATd>
                                            {categories.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                                        </ATd>
                                        <ATd>
                                            <div className="flex items-center justify-end">
                                                <div className="mr-1">
                                                    <ButtonEdit url="categories" />
                                                </div>
                                                <div className="ml-1">
                                                    <ButtonDelete url="categories" />
                                                </div>
                                            </div>
                                        </ATd>
                                    </ATr>
                                ))}
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