import React from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoPersonSharp, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { Inertia } from '@inertiajs/inertia';

const EdUser = ({ user }) => {
    const { flash, auth } = usePage().props;

    const { data, setData, errors, reset, progress } = useForm({
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: null,
        active: user.active,
        role: user.role,
        password: '',
        password_confirmation: ''
    });

    function submit(e) {
        e.preventDefault();
        Inertia.post(route('users.update', user.id), {
            _method: 'put',
            avatar: data.avatar,
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            active: data.active,
            role: data.role
        }, { onSuccess: () => reset('password', 'password_confirmation') });
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
                                    <img className="w-48 h-48 mx-2 rounded-full bg-gray-100" src={`/uploads/${user.avatar ? user.avatar : 'avatar.png'}`} alt={user.name} />
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="summary">Imagem avatar</label>
                                    <input
                                        type="file"
                                        id="avatar"
                                        onChange={(e) => setData('avatar', e.target.files[0])}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    {errors.avatar && <div className="text-red-500">{errors.avatar}</div>}
                                </div>
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
                                <div>
                                    <label className="text-gray-700" htmlFor="role" >Função</label>
                                    <select
                                        disabled={auth.user.role === 1 ? true : false }
                                        name="role"
                                        id="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                        <option value="1">Editor</option>
                                        <option value="2">Administrador</option>
                                    </select>
                                    {errors.role && <div className="text-red-500">{errors.role}</div>}
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="active"
                                        checked={data.active}
                                        onChange={(e) => setData('active', e.target.checked)}
                                        className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    <label className="text-gray-700" htmlFor="active">Ativar</label>
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