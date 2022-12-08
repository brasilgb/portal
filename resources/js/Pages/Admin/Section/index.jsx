import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoCog } from 'react-icons/io5';
import { ButtonSave } from '@/Components/Admin/Buttons';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { Inertia } from '@inertiajs/inertia';
import Select from 'react-select';
import { AiFillLayout } from 'react-icons/ai';

const Section = ({ categories, section }) => {
    const { flash } = usePage().props;

    const options = categories.map((cat) => ({ value: cat.id, label: cat.name }));

    const { data, setData, processing } = useForm({
        section1: section?.section1 ? section?.section1 : '',
        section2: section?.section2 ? section?.section2 : '',
        section3: section?.section3 ? section?.section3 : '',
        section4: section?.section4 ? section?.section4 : '',
        section5: section?.section5 ? section?.section5 : ''
    });

    function submit(e) {
        e.preventDefault();

        Inertia.post(route('sections.update', section?.id), {
            _method: 'put',
            section1: data?.section1['value'],
            section2: data?.section2['value'],
            section3: data?.section3['value'],
            section4: data?.section4['value'],
            section5: data?.section5['value']
        });
    }

    return (
        <AdminLayout title="Secções">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Secções",
                        'icon': <AiFillLayout />
                    }]}
                    breadcumb={[
                        { 'value': 'Secções', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
 
                    <BoxContent>
                        
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        
                        <form onSubmit={submit}>
                            <div>
                            <div className="grid grid-cols-1 gap-6 mt-4">

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 1 ( Slide Topo )</label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter((o) => o.value === data.section1)}
                                        onChange={(selected) => setData('section1', selected)}
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: '#00AEEF',
                                                color: 'white'
                                            }),
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 2</label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter((o) => o.value === data.section2)}
                                        onChange={(selected) => setData('section2', selected)}
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: '#00AEEF',
                                                color: 'white'
                                            }),
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 3</label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter((o) => o.value === data.section3)}
                                        onChange={(selected) => setData('section3', selected)}
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: '#00AEEF',
                                                color: 'white'
                                            }),
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 4</label>
                                    <Select
                                        options={options}
                                        defaultValue={options.filter((o) => o.value === data.section4)}
                                        onChange={(selected) => setData('section4', selected)}
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: '#00AEEF',
                                                color: 'white'
                                            }),
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 5</label>
                                    <Select  className="mb-10"
                                        options={options}
                                        defaultValue={options.filter((o) => o.value === data.section5)}
                                        onChange={(selected) => setData('section5', selected)}
                                        placeholder="Selecione a(s) categoria(s)"
                                        styles={{
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                backgroundColor: '#00AEEF',
                                                color: 'white'
                                            }),
                                        }}
                                    />
                                </div>



                            </div>
                            <div className="flex justify-end mt-6">
                                <ButtonSave processing={processing} />
                            </div>
                            </div>
                        </form>

                    </BoxContent>

                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Section;