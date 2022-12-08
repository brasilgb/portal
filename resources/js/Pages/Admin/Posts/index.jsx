import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoDocumentTextOutline, IoAdd, IoChevronDownCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Admin/Table';
import APagination from '@/Components/Admin/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { IconContext } from 'react-icons';

const Posts = ({ posts }) => {
    const { flash } = usePage().props;

    return (

        <AdminLayout title="Postagens">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Postagens",
                        'icon': <IoDocumentTextOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Postagens', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="posts.create" icon={<IoAdd />} value="Adicionar" />
                        <FormSearch url="posts.index" placeholder="Buscar por postagem" />
                    </BoxHeader>
                    <BoxContent className="overflow-auto">
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Title</ATh>
                                    <ATh>Slug</ATh>
                                    <ATh>Resumo</ATh>
                                    <ATh>Categorias</ATh>
                                    <ATh>Ativo</ATh>
                                    <ATh></ATh>
                                </ATr>
                                {posts.data.map((post, index) => (
                                    <Fragment key={index}>
                                        <ATr header={false}>
                                            <ATd>{post.id}</ATd>
                                            <ATd>{post.title}</ATd>
                                            <ATd>{post.slug}</ATd>
                                            <ATd>
                                                {post.summary}
                                            </ATd>
                                            <ATd>
                                                <div className="grid grid-cols-2 gap-1">
                                                {post.categories.map((c, i) => (
                                                    <span key={i} className="px-2 py-1 bg-yellow-100 rounded-md border ">{c.name}</span>
                                                ))}
                                                </div>
                                            </ATd>
                                            <ATd>
                                                <IconContext.Provider value={{ className: `text-2xl ${post.active ? 'text-green-600' : 'text-red-500'}` }}>
                                                    {post.active
                                                        ? <IoChevronDownCircleSharp />
                                                        : <IoCloseCircleSharp />
                                                    }
                                                </IconContext.Provider>
                                            </ATd>
                                            <ATd>
                                                <div className="flex items-center justify-end">
                                                    <div className="mr-1">
                                                        <ButtonEdit url={route('posts.edit', post.id)} />
                                                    </div>
                                                    <div className="ml-1">
                                                        <ButtonDelete url="posts.destroy" param={post.id} tipo="esta postagem" />
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
                            <APagination data={posts} />
                        </BoxFooter>
                    }
                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Posts;