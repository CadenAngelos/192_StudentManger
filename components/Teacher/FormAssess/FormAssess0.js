import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import styles from './FormAssess0.module.css'

function FormAssess() {
    const validationSchema = Yup.object().shape({
        assess: Yup.string()
            .required('Đánh giá không được để trống.')
            .max(1000,'Đánh giá không quá 1000 ký tự.'),
    });

    const formOptions = {
        mode: 'onChange',
        resolver: yupResolver(validationSchema)};
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) { // update
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="mx-5">
            <div className={styles.title}>Nhập đánh giá </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    id="assess"
                    name="assess"
                    rows={6}
                    defaultValue={''}
                    {...register('assess')} 
                    className={`form-control ${errors.assess ? 'is-invalid' : ''} shadow-sm  mt-1 block w-full sm:text-sm border border-gray-300 rounded-md`}
                />
                <div className="invalid-feedback text-xs text-red-500">{errors.assess?.message}</div>
                <button type="submit" className={styles.btn}>
                    Gửi
                </button>
            </form>
        </div>
    )
};

export default FormAssess;
