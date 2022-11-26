import React from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage';
import { Inertia } from '@inertiajs/inertia';

const EdPost = ({ post, categories }) => {
    const { flash } = usePage().props;

    const { data, setData, errors } = useForm({
        title: post.title,
        summary: post.summary,
        content: post.content,
        category_id: post.category_id,
        featured: null,
        social: post.social,
        linked: post.linked,
        active: post.active
    });

    function submit(e) {
        e.preventDefault();
        // put(route('posts.update', post.id));
        Inertia.post(route('posts.update', post.id), {_method: 'put',
            title: data.title,
            summary: data.summary,
            content: data.content,
            category_id: data.category_id,
            featured: data.featured,
            social: data.social,
            active: data.active
        });
    }

    return (
        <AdminLayout title="Postagens">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Postagens",
                        'icon': <IoGridOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Postagens', 'url': 'posts.index', 'separator': '/' },
                        { 'value': 'Alterar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="posts.index" icon={<IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="posts.index" placeholder="Buscar por postagem" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-gray-700" htmlFor="title">Título</label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {errors.title && <div className="text-red-500">{errors.title}</div>}
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="summary">Descrição</label>
                                    <textarea
                                        id="summary"
                                        value={data.summary}
                                        onChange={(e) => setData('summary', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                    {errors.summary && <div className="text-red-500">{errors.summary}</div>}
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="content">Conteúdo</label>
                                    <textarea
                                        id="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                    {errors.content && <div className="text-red-500">{errors.content}</div>}
                                </div>
                                <div className="w-48 p-2 bg-gray-100 border border-gray-200 shadow-md rounded-md">
                                    <img src={`/uploads/${post.featured}`} alt="" />
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="summary">Imagem destacada</label>
                                    <input
                                        type="file"
                                        id="featured"
                                        onChange={(e) => setData('featured', e.target.files[0])}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />

                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="category_id" >Categoria</label>
                                    <select
                                        name="category_id"
                                        id="category_id"
                                        value={data.category_id}
                                        onChange={(e) => setData('category_id', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                        <option value="0">Selecione uma categoria</option>
                                        {categories.map((category, indexCategory) => (
                                            <option key={indexCategory} value={category.id}>{category.name}</option>
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
                                <label className="text-gray-700" htmlFor="active">Ativar página</label>
                                {errors.active && <div className="text-red-500">{errors.active}</div>}
                            </div>

                            <div className="flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="social"
                                    checked={data.social}
                                    onChange={(e) => setData('social', e.target.checked)}
                                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                                <label className="text-gray-700" htmlFor="social">Botões redes sociais</label>
                                {errors.social && <div className="text-red-500">{errors.social}</div>}
                            </div>

                            <div className="flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="linked"
                                    checked={data.linked}
                                    onChange={(e) => setData('linked', e.target.checked)}
                                    className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                                <label className="text-gray-700" htmlFor="linked">Abrir em outra página</label>
                                {errors.linked && <div className="text-red-500">{errors.linked}</div>}
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

export default EdPost;