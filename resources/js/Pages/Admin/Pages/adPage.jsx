import React, { useRef } from 'react'
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoDocumentOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { useForm } from '@inertiajs/inertia-react';
import { Editor } from '@tinymce/tinymce-react';

const AdPage = () => {
    const editorRef = useRef();
    const { data, setData, post, progress, processing, errors } = useForm({
        title: '',
        summary: '',
        content: '',
        featured: null,
        active: 1,
        social: 0,
        linked: 0,
        type: 0
    });

    function submit(e) {
        e.preventDefault();
        setData('content', editorRef.current.getContent());
        post(route('pages.store'));
    }
    return (
        <AdminLayout title="Páginas">
            <BoxMain>
                <BoxSup
                    titleTop={[{
                        'title': "Páginas",
                        'icon': <IoDocumentOutline />
                    }]}
                    breadcumb={[
                        { 'value': 'Páginas', 'url': 'pages.index', 'separator': '/' },
                        { 'value': 'Adicionar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="pages.index" icon={<IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="pages.index" placeholder="Buscar por página" />
                    </BoxHeader>
                    <BoxContent>
                        <form onSubmit={submit} autoComplete="off">
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
                                    
                                    <Editor
                                        apiKey="3v1hskg4ud3hwf1bi5to0pt3xp6zjyksrvujfngcpzzaw2l3"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue=""
                                        id="content"
                                        init={{
                                            language: 'pt_BR',
                                            height: 300,
                                            menubar: false,
                                            plugins: 'autolink lists link charmap print preview anchor table image',
                                            toolbar: 'undo redo styles link bold italic image table alignleft aligncenter alignright alignjustify  bullist numlist outdent indent',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    {errors.content && <div className="text-red-500">{errors.content}</div>}
                                </div>

                                <div>
                                    <label className="text-gray-700" htmlFor="summary">Imagem destacada</label>
                                    <input
                                        type="file"
                                        id="featured"
                                        onChange={(e) => setData('featured', e.target.files[0])}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    {progress && (
                                        <progress value={progress.percentage} max="100">
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    {errors.featured && <div className="text-red-500">{errors.featured}</div>}
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="social"
                                        checked={data.social}
                                        onChange={(e) => setData('social', e.target.checked)}
                                        className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    <label className="text-gray-700" htmlFor="social">Botões redes sociais</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="linked"
                                        checked={data.linked}
                                        onChange={(e) => setData('linked', e.target.checked)}
                                        className="block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    />
                                    <label className="text-gray-700" htmlFor="linked">Abrir em outra página</label>
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

export default AdPage;