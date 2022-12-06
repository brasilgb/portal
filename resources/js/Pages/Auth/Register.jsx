import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons';
import { IoLockClosedOutline, IoMailOutline, IoPerson } from 'react-icons/io5';

export default function Register() {
    const { userRegistered } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            {userRegistered > 0
                ?
                <div className="flex justify-center mx-auto bg-gray-200 p-2 rounded">
                    <Link
                        href={route('login')}
                        className="underline text-md text-red-600 hover:text-red-900"
                    >
                        Para registrar um usuário solicite ao administrador!
                    </Link>
                </div>
                :
                <form onSubmit={submit}>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className="flex-none items-center justify-center rounded-tl-lg rounded-bl-lg border border-gray-300 bg-white p-2 shadow-sm">
                                <IconContext.Provider value={{ className: 'text-2xl w-5 fill-gray-500' }}>
                                    <div>
                                        <IoPerson />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='flex-1'>
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                    autoComplete="name"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Nome"
                                />
                            </div>
                        </div>
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className="flex-none items-center justify-center rounded-tl-lg rounded-bl-lg border border-gray-300 bg-white p-2 shadow-sm">
                                <IconContext.Provider value={{ className: 'text-2xl w-5 fill-gray-500' }}>
                                    <div>
                                        <IoMailOutline />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='flex-1'>
                                <TextInput
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                    placeholder="E-mail"
                                />
                            </div>
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className="flex-none items-center justify-center rounded-tl-lg rounded-bl-lg border border-gray-300 bg-white p-2 shadow-sm">
                                <IconContext.Provider value={{ className: 'text-2xl w-5 fill-gray-500' }}>
                                    <div>
                                        <IoLockClosedOutline />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='flex-1'>
                                <TextInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    placeholder="Senha"
                                />
                            </div>
                        </div>
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className="flex-none items-center justify-center rounded-tl-lg rounded-bl-lg border border-gray-300 bg-white p-2 shadow-sm">
                                <IconContext.Provider value={{ className: 'text-2xl w-5 fill-gray-500' }}>
                                    <div>
                                        <IoLockClosedOutline />
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className='flex-1'>
                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                    handleChange={onHandleChange}
                                    placeholder="Repita a senha"
                                />
                            </div>
                        </div>
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Já registrado?
                        </Link>

                        <PrimaryButton className="ml-4" processing={processing}>
                            Registrar
                        </PrimaryButton>
                    </div>
                </form>
            }
        </GuestLayout>
    );
}
