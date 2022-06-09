import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import styles from './FormUploadVideo0.module.css'

function FormUploadVideo() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Tên video không được để trống.')
            .max(50,'Tên không quá 50 ký tự.'),
        about: Yup.string()
            .max(1000,'Mô tả không quá 1000 ký tự.')
    });

    const formOptions = {
        mode: 'onChange',
        resolver: yupResolver(validationSchema)};
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) { // update
        // display form data on success
        alert('Video tải lên thành công!! :-)\n\n'); //+ JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="mx-3">
            <div className={styles.title}>Tải lên video</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tên video</label>
                    <input
                        id="name"
                        name="name"
                        defaultValue={''}
                        {...register('name')} 
                        className={`form-control ${errors.name ? 'is-invalid' : ''} shadow-sm h-8 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`}
                    />
                    <div className="invalid-feedback text-xs text-red-500">{errors.name?.message}</div>
                </div>
                <div className="my-5">
                    <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea
                        id="about"
                        name="about"
                        rows={5}
                        defaultValue={''}
                        {...register('about')} 
                        className={`form-control ${errors.about ? 'is-invalid' : ''} shadow-sm  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`}
                    />
                    <div className="invalid-feedback text-xs text-red-500">{errors.about?.message}</div>
                </div>
                <div className="my-5">
                    <label className="block text-sm font-medium text-gray-700">Tải lên video</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm text-gray-600">
                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="video" name="video" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">MP4, AVI,.. up to 100MB</p>
                        </div>
                    </div>
                </div>
                <button type="submit" className={styles.btn_add}>
                    Tải lên
                </button>
            </form>
        </div>
    )
};

export default FormUploadVideo;
