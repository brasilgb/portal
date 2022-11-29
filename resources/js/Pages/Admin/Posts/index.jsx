import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoDocumentTextOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';
import { usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/FlashMessage';

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
                    <BoxContent>
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
                                    <ATh>Categoria</ATh>
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
                                            <ATd>{post.categories.name}</ATd>
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