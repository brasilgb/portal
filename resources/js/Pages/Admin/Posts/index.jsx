import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoGridOutline, IoAdd } from 'react-icons/io5';
import { ButtonDelete, ButtonEdit, ButtonNew } from '@/Components/Buttons';
import { FormSearch } from '@/Components/Form';
import { ATable, ATd, ATh, ATr } from '@/Components/Table';
import APagination from '@/Components/Pagination';
import CatHierarchy from '@/Components/CatHierarchy';

const Posts = ({ posts }) => {

    return (

        <AdminLayout title="Postagens">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Postagens",
                        'icon': <IoGridOutline />
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
                        <div className="inline-block min-w-full rounded-md overflow-hidden">
                            <ATable>
                                <ATr header={true}>
                                    <ATh>#</ATh>
                                    <ATh>Title</ATh>
                                    <ATh>Slug</ATh>
                                    <ATh>Resumo</ATh>
                                    <ATh></ATh>
                                </ATr>
                                {posts.data.map((post, index) => (
                                    <Fragment key={index}>
                                        <ATr header={false}>
                                            <ATd>{post.id}</ATd>
                                            <ATd>- - - - -{post.name}</ATd>
                                            <ATd>{post.slug}</ATd>
                                            <ATd>
                                                {data.data.filter((c) => (c.id === posts.parent)).map((ct) => ct.name)}
                                            </ATd>
                                            <ATd>
                                                <div className="flex items-center justify-end">
                                                    <div className="mr-1">
                                                        <ButtonEdit url={route('posts.edit', post.id)} />
                                                    </div>
                                                    <div className="ml-1">
                                                        <ButtonDelete url="posts.destroy" post={post.id} />
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