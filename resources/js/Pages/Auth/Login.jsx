import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons';
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';

export default function Login({ status, canResetPassword }) {
    const { userRegistered } = usePage().props
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            {!userRegistered
                ?
                <div className="flex justify-center mx-auto bg-gray-200 p-2 rounded">
                <Link
                    href={route('register')}
                    className="underline text-lg text-red-600 hover:text-red-900"
                >
                    <span>Registre um usuário administrador!</span>
                </Link>
                </div>
                :
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
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
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
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />
                            </div>
                        </div>
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                            <span className="ml-2 text-sm text-gray-600">Lembre de mim</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Esqueceu sua senha?
                            </Link>
                        )}
                        <PrimaryButton className="ml-4" processing={processing}>
                            Entrar
                        </PrimaryButton>
                    </div>
                </form>
            }
        </GuestLayout>
    );
}
