import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoPersonSharp, IoAdd, IoChevronDownCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Admin/Table';
import APagination from '@/Components/Admin/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { IconContext } from 'react-icons';

const Users = ({ users }) => {
    const { flash, auth } = usePage().props;

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
                    {auth.user.role > 1 &&
                        <BoxHeader>
                            <ButtonNew url="users.create" icon={<IoAdd />} value="Adicionar" />
                            <FormSearch url="users.index" placeholder="Buscar por usuário" />
                        </BoxHeader>
                    }
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
                                    <ATh>Função</ATh>
                                    <ATh>Ativo</ATh>
                                    <ATh></ATh>
                                </ATr>
                                {users.data.map((user, index) => (
                                    <Fragment key={index}>
                                        <ATr header={false}>
                                            <ATd>{user.id}</ATd>
                                            <ATd>{user.name}</ATd>
                                            <ATd>{user.username}</ATd>
                                            <ATd>{user.email}</ATd>
                                            <ATd>{user.role > 1 ? 'Administrador' : 'Editor'}</ATd>
                                            <ATd>
                                                <IconContext.Provider value={{ className: `text-2xl ${user.active ? 'text-green-600' : 'text-red-500'}` }}>
                                                    {user.active
                                                        ? <IoChevronDownCircleSharp />
                                                        : <IoCloseCircleSharp />
                                                    }
                                                </IconContext.Provider>
                                            </ATd>
                                            <ATd>
                                                <div className="flex items-center justify-end">
                                                    <div className="mr-1">
                                                        <ButtonEdit url={route('users.edit', user.id)} />
                                                    </div>
                                                    {auth.user.role > 1 &&
                                                        <div className="ml-1">
                                                            <ButtonDelete url="users.destroy" param={user.id} tipo="este usuário" />
                                                        </div>
                                                    }
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