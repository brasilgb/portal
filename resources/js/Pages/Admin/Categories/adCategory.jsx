import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';

const AdCategory = () => {
    return (
        <AdminLayout title="Categorias">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Categorias",
                        'icon': <IoGridOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Categorias', 'url': 'categories', 'separator': '/' },
                        { 'value': 'Adicionar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="categories" icon={ <IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="categorias" placeholder="Buscar por categoria" />
                    </BoxHeader>
                    <BoxContent>
                        <h1>conteudo</h1>
                    </BoxContent>
                    <BoxFooter>
                        <h1>rodape</h1>
                    </BoxFooter>
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default AdCategory;