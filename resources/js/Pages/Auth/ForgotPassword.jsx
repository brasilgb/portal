import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons';
import { IoMailOutline } from 'react-icons/io5';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos um e-mail com um link de redefinição de senha que permitirá que você escolha uma nova.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className="flex-none items-center justify-center rounded-tl-lg rounded-bl-lg border border-gray-300 bg-white p-2 shadow-sm">
                            <IconContext.Provider value={{ className: 'text-2xl w-5 fill-gray-500' }}>
                                <div>
                                    <IoMailOutline />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className='flex-1'>
                            <TextInput
                                type="text"
                                name="email"
                                value={data.email}
                                className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                isFocused={true}
                                handleChange={onHandleChange}
                                placeholder="Digite o e-mail de sua conta"
                            />
                        </div>
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" processing={processing}>
                        Enviar Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
