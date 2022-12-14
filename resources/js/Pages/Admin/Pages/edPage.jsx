import React, { useRef } from 'react';
import { BoxContainer, BoxContent, BoxFooter, BoxHeader, BoxMain, BoxSup } from '@/Components/Admin/Boxes';
import AdminLayout from '@/Layouts/AdminLayout';
import { IoDocumentOutline, IoArrowBackOutline } from 'react-icons/io5';
import { ButtonNew, ButtonSave } from '@/Components/Admin/Buttons';
import { FormSearch } from '@/Components/Admin/Form';
import { useForm, usePage } from '@inertiajs/inertia-react';
import FlashMessage from '@/Components/Admin/FlashMessage';
import { Inertia } from '@inertiajs/inertia';
import { Editor } from '@tinymce/tinymce-react';

const EdPage = ({ page }) => {
    const editorRef = useRef();
    const { flash } = usePage().props;

    const { data, setData, processing, errors } = useForm({
        title: page.title,
        summary: page.summary,
        content: page.content,
        featured: null,
        social: page.social,
        linked: page.linked,
        active: page.active
    });

    function submit(e) {
        e.preventDefault();
        Inertia.post(route('pages.update', page.id), {
            _method: 'put',
            title: data.title,
            summary: data.summary,
            content: editorRef.current.getContent(),
            featured: data.featured,
            social: data.social,
            active: data.active
        });
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
                        { 'value': 'Alterar', 'url': '', 'separator': '' },
                    ]}
                />
                <BoxContainer>
                    <BoxHeader>
                        <ButtonNew url="pages.index" icon={<IoArrowBackOutline />} value="Voltar" />
                        <FormSearch url="pages.index" placeholder="Buscar por página" />
                    </BoxHeader>
                    <BoxContent>
                        {flash.message && (
                            <FlashMessage message={flash.message} />
                        )}
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
                                    <label className="text-gray-700" htmlFor="content">Conteúdo</label>
                                    {/* <textarea
                                        id="content"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    </textarea> */}
                                    <Editor
                                        apiKey="3v1hskg4ud3hwf1bi5to0pt3xp6zjyksrvujfngcpzzaw2l3"
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue={page.content}
                                        content={page.content}
                                        id="content"
                                        init={{
                                            language: 'pt_BR',
                                            height: 300,
                                            menubar: false,
                                            plugins: 'autolink lists link charmap print preview anchor table image',
                                            toolbar: 'undo redo styles link bold italic image table lineheight alignleft aligncenter alignright alignjustify  bullist numlist outdent indent',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    {errors.content && <div className="text-red-500">{errors.content}</div>}
                                </div>

                                <div className="w-48 p-2 bg-gray-100 border border-gray-200 shadow-md rounded-md">
                                    <img src={`/uploads/${page.featured}`} alt="" />
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

                                <div className="flex items-center">
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

                                <div className="flex items-center">
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

                                <div className="flex items-center">
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

export default EdPage;