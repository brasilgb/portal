import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { useForm } from '@inertiajs/inertia-react';

const edCategory = ({ category, parent }) => {

    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        description: category.description,
        parent: category.parent,
        active: category.active
    });

    function submit(e) {
        e.preventDefault();

        put(route('categories.update', category.id));
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
                        { 'value': 'Categorias', 'url': 'categories.index', 'separator': '/' }
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
                                    <label className="text-gray-700" for="category">Categoria</label>
                                    <input
                                        id="category"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.name && <div>{errors.name}</div>}
                                </div>

                                <div>
                                    <label className="text-gray-700" for="descricao">Descrição</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                    {errors.description && <div>{errors.description}</div>}
                                </div>

                                <div>
                                    <label className="text-gray-700" for="parent">Categoria pai</label>
                                    <select
                                        name="parent"
                                        id="parent"
                                        value={data.parent}
                                        onChange={(e) => setData('parent', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                        <option value="0" >Selecione uma categoria pai</option>
                                        {parent.map((cat, indexCat) => (
                                            <option key={indexCat} value={cat.id} >{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="active"
                                    checked={data.active}
                                    onChange={(e) => setData('active', e.target.checked)}
                                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                                <label className="text-gray-700" for="active">{category.active ? 'Desativar' : 'Ativar'}</label>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button
                                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                    Save
                                </button>
                            </div>
                        </form>

                    </BoxContent>

                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default edCategory;