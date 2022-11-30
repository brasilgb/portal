import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/inertia-react';
import { IconContext } from 'react-icons';
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

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
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full border-l-0 rounded-l-none focus:ring-0"
                                autoComplete="username"
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
                                autoComplete="new-password"
                                isFocused={true}
                                handleChange={onHandleChange}
                                placeholder="Digite uma senha"
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
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                placeholder="Repita a senha"
                            />
                        </div>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" processing={processing}>
                    Redefinir senha
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
