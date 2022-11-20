import React from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { useForm } from '@inertiajs/inertia-react';

const AdCategory = ({ categories }) => {

    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        parent: '',
        active: '1'
    });

    function submit(e) {
        e.preventDefault();
        post(route('categories.store'));
    }

    return (
        <AdminLayout title="Categorias">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Categorias",
                        'icon': <IoGridOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Categorias', 'url': 'categories.index', 'separator': '/' },
                        { 'value': 'Adicionar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="categories.index" icon={<IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="categories.index" placeholder="Buscar por categoria" />
                    </BoxHeader>
                    <BoxContent>

                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-gray-700" htmlFor="category">Categoria</label>
                                    <input
                                        id="category"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="descricao">Descrição</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                                </div>
                                <div>

                                    <label className="text-gray-700" htmlFor="parent" >Categoria pai</label>
                                    <select
                                        name="parent"
                                        id="parent"
                                        value={data.parent}
                                        onChange={(e) => setData('parent', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                        <option value="0">Selecione uma categoria pai</option>
                                        {categories.map((category, indexCategory) => (
                                            <option key={indexCategory} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
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

export default AdCategory;