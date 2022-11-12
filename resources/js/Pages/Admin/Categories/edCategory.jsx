import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline } from 'react-icons/io5';
import { ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';

const UCategory = () => {
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
                        <ButtonNew />
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

export default UCategory;