import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';

const edCategory = ({ category, parent }) => {
    const { flash } = usePage().props;

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
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <form onSubmit={submit} autoComplete="off">
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
                                    <label className="text-gray-700" htmlFor="parent">Categoria pai</label>
                                    <select
                                        name="parent"
                                        id="parent"
                                        value={data.parent}
                                        onChange={(e) => setData('parent', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                        <option value=" " >Selecione uma categoria pai</option>
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
                                <label className="text-gray-700" htmlFor="active">{category.active ? 'Desativar' : 'Ativar'}</label>
                            </div>

                            <div className="flex justify-end mt-6">
                                <ButtonSave processing={processing} />
                            </div>
                        </form>

                    </BoxContent>

                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default edCategory;