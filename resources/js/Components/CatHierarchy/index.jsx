import React, { Fragment } from 'react'
import { ButtonDelete, ButtonEdit } from '../Buttons';
import { ATd, ATr } from '../Table';

const CatHierarchy = ({ data, catid }) => {
    return (
        <Fragment>
            {data.data
                .filter((c) => (c.parent === catid))
                .map((category, index) => (
                    <Fragment key={index}>
                        <ATr header={false}>
                            <ATd>{category.id}</ATd>
                            <ATd>- {category.name}</ATd>
                            <ATd>{category.slug}</ATd>
                            <ATd>
                                {data.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                            </ATd>
                            <ATd>{category.postagens.length}</ATd>
                            <ATd>
                                <div className="flex items-center justify-end">
                                    <div className="mr-1">
                                        <ButtonEdit url={route('categories.edit', category.id)} />
                                    </div>
                                    <div className="ml-1">
                                        <ButtonDelete url="categories.destroy" param={category.id} tipo="esta categoria" />
                                    </div>
                                </div>
                            </ATd>
                        </ATr>
                        {data.data
                            .filter((c) => (c.parent === category.id))
                            .map((category, index) => (
                                <Fragment key={index}>
                                    <ATr header={false}>
                                        <ATd>{category.id}</ATd>
                                        <ATd>- - {category.name}</ATd>
                                        <ATd>{category.slug}</ATd>
                                        <ATd>
                                            {data.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                                        </ATd>
                                        <ATd>{category.postagens.length}</ATd>
                                        <ATd>
                                            <div className="flex items-center justify-end">
                                                <div className="mr-1">
                                                    <ButtonEdit url={route('categories.edit', category.id)} />
                                                </div>
                                                <div className="ml-1">
                                                    <ButtonDelete url="categories.destroy" param={category.id} tipo="esta categoria" />
                                                </div>
                                            </div>
                                        </ATd>
                                    </ATr>
                                    {data.data
                                        .filter((c) => (c.parent === category.id))
                                        .map((category, index) => (
                                            <Fragment key={index}>
                                                <ATr header={false}>
                                                    <ATd>{category.id}</ATd>
                                                    <ATd>- - -{category.name}</ATd>
                                                    <ATd>{category.slug}</ATd>
                                                    <ATd>
                                                        {data.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                                                    </ATd>
                                                    <ATd>{category.postagens.length}</ATd>
                                                    <ATd>
                                                        <div className="flex items-center justify-end">
                                                            <div className="mr-1">
                                                                <ButtonEdit url={route('categories.edit', category.id)} />
                                                            </div>
                                                            <div className="ml-1">
                                                                <ButtonDelete url="categories.destroy" param={category.id} tipo="esta categoria" />
                                                            </div>
                                                        </div>
                                                    </ATd>
                                                </ATr>
                                                {data.data
                                                    .filter((c) => (c.parent === category.id))
                                                    .map((category, index) => (
                                                        <Fragment key={index}>
                                                            <ATr header={false}>
                                                                <ATd>{category.id}</ATd>
                                                                <ATd>- - - -{category.name}</ATd>
                                                                <ATd>{category.slug}</ATd>
                                                                <ATd>
                                                                    {data.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                                                                </ATd>
                                                                <ATd>{category.postagens.length}</ATd>
                                                                <ATd>
                                                                    <div className="flex items-center justify-end">
                                                                        <div className="mr-1">
                                                                            <ButtonEdit url={route('categories.edit', category.id)} />
                                                                        </div>
                                                                        <div className="ml-1">
                                                                            <ButtonDelete url="categories.destroy" param={category.id} tipo="esta categoria" />
                                                                        </div>
                                                                    </div>
                                                                </ATd>
                                                            </ATr>
                                                            {data.data
                                                                .filter((c) => (c.parent === category.id))
                                                                .map((category, index) => (
                                                                    <Fragment key={index}>
                                                                        <ATr header={false}>
                                                                            <ATd>{category.id}</ATd>
                                                                            <ATd>- - - - -{category.name}</ATd>
                                                                            <ATd>{category.slug}</ATd>
                                                                            <ATd>
                                                                                {data.data.filter((c) => (c.id === category.parent)).map((ct) => ct.name)}
                                                                            </ATd>
                                                                            <ATd>{category.postagens.length}</ATd>
                                                                            <ATd>
                                                                                <div className="flex items-center justify-end">
                                                                                    <div className="mr-1">
                                                                                        <ButtonEdit url={route('categories.edit', category.id)} />
                                                                                    </div>
                                                                                    <div className="ml-1">
                                                                                        <ButtonDelete url="categories.destroy" param={category.id} tipo="esta categoria" />
                                                                                    </div>
                                                                                </div>
                                                                            </ATd>
                                                                        </ATr>
                                                                    </Fragment>
                                                                ))}
                                                        </Fragment>
                                                    ))}
                                            </Fragment>
                                        ))}
                                </Fragment>
                            ))}
                    </Fragment>
                ))}
        </Fragment>
    )
}

export default CatHierarchy;