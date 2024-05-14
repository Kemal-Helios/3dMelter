import { useEffect, FormEventHandler, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IoInformation } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaRoute } from "react-icons/fa";


function ProjectsForm() {
    interface FormProps {
        name: string;
        email: string;
        phone: string;
        materials: string;
        types: string;
        colors: string;
        quantity: string;
        finishing: boolean;
        description: string;
        notes: string;
        address: string;
        policies: boolean;
        file: File | undefined;

    }
    const resData = {
        name: '',
        email: '',
        phone: '',
        materials: '',
        types: '',
        colors: '',
        quantity: '',
        finishing: false,
        description: '',
        notes: '',
        address: '',
        policies: false,
        file: undefined,
    }

    const { data, setData, post, progress, processing, errors, reset }
        = useForm<FormProps>(resData);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            setData("file", e.currentTarget.files[0]);
        }
    };
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('projects'), { onSuccess: () => reset() });
    };

    const { flash } = usePage<any>().props;
    return (

        <div className='flex justify-center mb-5 '>
            <Head title="Projects" />

            <form onSubmit={submit} encType="multipart/form-data">
                {flash.message && (
                    <div role="alert" className="alert alert-success my-3">
                        <IoInformation />
                        <span>{flash.message}</span>
                    </div>
                )}
                <div className='grid grid-cols-2 gap-2'>
                    <div className='mt-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <GrUserManager />
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                placeholder="Username"
                                className="grow border-0 "
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                                required />
                        </label>
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <MdAlternateEmail />
                            <input
                                id="email"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                className="grow border-0"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                required />
                        </label>

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <BsTelephoneInbound />
                            <input
                                id="phone"
                                name="phone"
                                value={data.phone}
                                placeholder="Phone Number"
                                className="grow border-0"
                                autoComplete="phone"
                                onChange={(e) => setData('phone', e.target.value)}
                                required />
                        </label>
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    <div className="mt-4">

                        <select
                            id="types"
                            name="types"
                            defaultValue={'DEFAULT'}
                            onChange={(e) => setData('types', e.target.value)}
                            className="select select-bordered w-full max-w-xs">
                            <option value="DEFAULT" disabled>Types</option>
                            <option value="fdm">FDM</option>
                            <option value="dlp">DLP</option>
                        </select>

                        <InputError message={errors.types} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <select
                            id="materials"
                            name="materials"
                            defaultValue={'DEFAULT'}
                            onChange={(e) => setData('materials', e.target.value)}
                            className="select select-bordered w-full max-w-xs ">
                            <option value="DEFAULT" disabled>Materials</option>
                            <option className={` ${data.types === 'fdm' ? "" : "hidden "}`} value="pla">PLA</option>
                            <option className={` ${data.types === 'fdm' ? "" : "hidden "}`} value="pla+">PAL+</option>
                            <option className={` ${data.types === 'dlp' ? "" : "hidden "}`} value="absResin"> ABS Like Resin Pro 2 </option>
                            <option className={` ${data.types === 'dlp' ? "" : "hidden "}`} value="standart">8K Standart Reçine</option>
                        </select>

                        <InputError message={errors.materials} className="mt-2" />
                    </div>

                    <div className="mt-4">

                        <select
                            id="colors"
                            name="colors"
                            defaultValue={'DEFAULT'}
                            onChange={(e) => setData('colors', e.target.value)}
                            className="select select-bordered w-full max-w-xs">
                            <option value="DEFAULT" disabled>Colors</option>
                            <option value="red">RED</option>
                            <option value="blue">BLUE</option>
                        </select>

                        <InputError message={errors.colors} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <AiOutlineFieldNumber />
                            <input
                                id="quantity"
                                name="quantity"
                                value={data.quantity}
                                placeholder="Quantity"
                                className="grow border-0"
                                autoComplete="quantity"
                                onChange={(e) => setData('quantity', e.target.value)}
                                required />
                        </label>

                        <InputError message={errors.quantity} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <FaRoute />
                            <input
                                id="address"
                                name="address"
                                value={data.address}
                                placeholder="Address"
                                className="grow border-0"
                                autoComplete="address"
                                onChange={(e) => setData('address', e.target.value)}
                                required />
                        </label>

                        <InputError message={errors.address} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            className="textarea textarea-bordered  md:w-80 w-48"
                            placeholder="Description"></textarea>

                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <textarea
                            id="notes"
                            name="notes"
                            value={data.notes}
                            onChange={(e) => setData('notes', e.target.value)}
                            className="textarea textarea-bordered md:w-80 w-48"
                            placeholder="Notes"></textarea>


                        <InputError message={errors.notes} className="mt-2" />
                    </div>

                    <div className="mt-4 ">
                        <div className=''>
                            <label className="label cursor-pointer">
                                <span className="label-text">Finishing</span>
                                <input
                                    id="finishing"
                                    type="checkbox"
                                    className="toggle toggle-success"
                                    name="finishing"
                                    autoComplete="finishing"
                                    onChange={(e) => setData('finishing', e.target.checked)}
                                />
                            </label>
                            <InputError message={errors.finishing} className="mt-2" />
                        </div>

                    </div>
                    <div id='fileError' className="mt-4">

                        <input
                            id="file"
                            type="file"
                            name="file"
                            onChange={handleFile}
                            required
                            className="file-input file-input-bordered w-full max-w-xs" />
                        {progress && (
                            <progress value={progress.percentage} max="100">{progress.percentage}%
                            </progress>
                        )}
                        <InputError message={errors.file} className="mt-2" />
                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <div className='mx-16 '>
                        <label className="label cursor-pointer">

                            <span className="label-text">Policies and agreement</span>

                            <input
                                id="policies"
                                type="checkbox"
                                className="checkbox mx-3"
                                name="policies"
                                autoComplete="policies"
                                required
                                onChange={(e) => setData('policies', e.target.checked)}
                            />
                        </label>
                        <InputError message={errors.finishing} className="mt-2" />
                    </div>
                    <button
                        className="btn border rounded-full bg-gray-800 border-0 w-48 py-4"
                        type="submit" disabled={processing}>Submit</button>

                </div>
            </form>
        </div>
    );

}
export default ProjectsForm;
//(e) => isChecked ? false:true
