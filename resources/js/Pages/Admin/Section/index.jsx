import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoCog } from 'react-icons/io5';
import { ButtonSave } from '@/Components/Admin/Buttons';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { Inertia } from '@inertiajs/inertia';
import Select from 'react-select';

const Section = ({ categories, section }) => {
    const { flash } = usePage().props;
    const options = categories.map((cat) => ({ value: cat.id, label: cat.name }));

    const { data, setData, processing } = useForm({
        section1: section.section1,
        section2: section.section2,
        section3: section.section3,
        section4: section.section4,
        section5: section.section5
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
        // Inertia.post(route('sections.update', section?.id), {
        //     _method: 'put',
        //     section1: data.section1,
        //     section2: data.section2,
        //     section3: data.section3,
        //     section4: data.section4,
        //     section5: data.section5
        // });
    }

    const handleChange = (selected) => {
        console.log(selected);
        // setData('section1', selected.map((v) => (v.value)));
        // setData('section2', selected.map((v) => (v.value)));
        // setData('section3', selected.map((v) => (v.value)));
        // setData('section4', selected.map((v) => (v.value)));
        // setData('section5', selected.map((v) => (v.value)));
    };

    return (
        <AdminLayout title="Configurações">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Configurações",
                        'icon': <IoCog />
                    }]}
                    breadcumb={[
                        { 'value': 'Configurações', 'url': '', 'separator': '' }
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>

                    </BoxHeader>

                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-6 mt-4">

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Secção 1</label>
                                    <Select
                                        options={options}
                                        defaultValue={data.section1}
                                        onChange={(e) => setData('section1', e.target.value)}
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
                                    <label className="text-gray-700" htmlFor="description">Secção 1</label>
                                    <Select
                                        options={options}
                                        defaultValue={data.section2}
                                        onChange={handleChange}
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
                                    <label className="text-gray-700" htmlFor="description">Secção 1</label>
                                    <Select
                                        options={options}
                                        defaultValue={data.section3}
                                        onChange={handleChange}
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
                                    <label className="text-gray-700" htmlFor="description">Secção 1</label>
                                    <Select
                                        options={options}
                                        defaultValue={data.section4}
                                        onChange={handleChange}
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
                                    <label className="text-gray-700" htmlFor="description">Secção 1</label>
                                    <Select
                                        options={options}
                                        defaultValue={data.section5}
                                        onChange={handleChange}
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
                        </form>

                    </BoxContent>

                </BoxContainer>
            </BoxMain>
        </AdminLayout>
    )
}

export default Section;