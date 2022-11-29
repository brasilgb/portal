import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoPersonSharp, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage';

const Users = ({ users }) => {
    const { flash } = usePage().props;

    return (

        <AdminLayout title="Usuários">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Usuários",
                        'icon': <IoPersonSharp />
                    }]}
                    breadcumb={[
                        { 'value': 'Usuários', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="users.create" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="users.index" placeholder="Buscar por usuário" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Nome</ATh>
                                    <ATh>Usuário</ATh>
                                    <ATh>E-mail</ATh>
                                    <ATh></ATh>
                                </ATr>
                                {users.data.map((user, index) => (
                                    <Fragment key={index}>
                                        <ATr header={false}>
                                            <ATd>{user.id}</ATd>
                                            <ATd>{user.name}</ATd>
                                            <ATd>{user.username}</ATd>
                                            <ATd>{user.email}</ATd>
                                            <ATd>
                                                <div className="flex items-center justify-end">
                                                    <div className="mr-1">
                                                        <ButtonEdit url={route('users.edit', user.id)} />
                                                    </div>
                                                    <div className="ml-1">
                                                        <ButtonDelete url="users.destroy" param={user.id} tipo="este usuário" />
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
                            <APagination data={users} />
                        </BoxFooter>
                    }
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Users;