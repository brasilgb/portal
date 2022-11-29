import React from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoPersonSharp, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage';

const EdUser = ({ user }) => {
    const { flash } = usePage().props;

    const { data, put, setData, errors, reset } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        password: '',
        password_confirmation: ''
    });

    function submit(e) {
        e.preventDefault();
        put(route('users.update', user.id), {
            onSuccess: () => reset('password', 'password_confirmation')
        });
    }

    return (
        <AdminLayout title="Usuários">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Usuários",
                        'icon': <IoPersonSharp />
                    }]}
                    breadcumb={[
                        { 'value': 'Usuários', 'url': 'users.index', 'separator': '/' },
                        { 'value': 'Adicionar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="users.index" icon={<IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="users.index" placeholder="Buscar por usuário" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-gray-700" htmlFor="name">Nome</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.username && <div className="text-red-500">{errors.username}</div>}
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="email">E-mail</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="password">Senha</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="password_confirmation">Repita a senha</label>
                                    <input
                                        type="password"
                                        id="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
                                </div>

                            </div>

                            <div className="flex justify-end mt-6">
                                <ButtonSave />
                            </div>
                        </form>

                    </BoxContent>
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default EdUser;