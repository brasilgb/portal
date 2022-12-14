import React, { Fragment } from 'react'
import { BoxContainer, BoxContent, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoCog } from 'react-icons/io5';
import { ButtonSave } from '@/Components/Admin/Buttons';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { Inertia } from '@inertiajs/inertia';

const Settings = ({ setting }) => {
    
    const { flash } = usePage().props;

    const { data, setData, processing } = useForm({
        logo: null,
        title: setting?.title ? setting?.title : '',
        description: setting?.description ? setting?.description : '',
        metadescription: setting?.metadescription ? setting?.metadescription : '',
        address: setting?.address ? setting?.address : '',
        maps: setting?.maps ? setting?.maps : '',
        contacts: setting?.contacts ? setting?.contacts : ''
    });

    function submit(e) {
        e.preventDefault();
        Inertia.post(route('settings.update', setting?.id), {
            _method: 'put',
            logo: data.logo,
            title: data.title,
            description: data.description,
            metadescription: data.metadescription,
            address: data.address,
            maps: data.maps,
            contacts: data.contacts
        });

    }

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
                                    <img className='w-48 h-48 mx-2 rounded-full bg-gray-100' src={`/uploads/${setting?.logo ? setting?.logo : 'default.png'}`} alt="" />
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="logo">Logotipo</label>
                                    <input
                                        type="file"
                                        id="logo"
                                        onChange={(e) => setData('logo', e.target.files[0])}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-700" htmlFor="title">Título</label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />

                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="description">Descrição</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    >
                                    </textarea>

                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="address">Endereço (separador ,)</label>
                                    <textarea
                                        id="address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>

                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="contacts">Contatos</label>
                                    <textarea
                                        id="contacts"
                                        value={data.contacts}
                                        onChange={(e) => setData('contacts', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>

                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="metadescription">Meta Description (SEO)</label>
                                    <textarea
                                        rows={4}
                                        id="metadescription"
                                        value={data.metadescription}
                                        onChange={(e) => setData('metadescription', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="maps">Google Maps</label>
                                    <textarea
                                        rows={4}
                                        id="maps"
                                        value={data.maps}
                                        onChange={(e) => setData('maps', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea>
                                </div>

                                {setting.maps &&

                                    <div className="w-full flex justify-center border shadow-md" dangerouslySetInnerHTML={{ __html: setting.maps }} />
                                }
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

export default Settings;