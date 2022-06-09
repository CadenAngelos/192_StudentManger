import React, { useEffect, useRef, useState } from "react"
import Layout from '../../layouts/Layout'
import Modal from '../../components/Teacher/Modal/Modal'
import FormAssess from "../../components/Teacher/FormAssess/FormAssess0"
import styles from '../../styles/teacher/Assess0.module.css'

export default function Couses() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
    <div className="max-w-2xl mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className={styles.title}>DANH SÁCH HỌC VIÊN</div>
        <div>
        <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Tên học viên
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    Khóa học
                                </th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="ml-4">
                                            <div className="text-base font-medium text-gray-900">Trần Thảo Sương</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">Nhập môn công nghệ phần mềm</div>
                                    </td>
                                    <td className={styles.btn_assess} > 
                                        <button onClick={() => setShowModal(true)}>Đánh giá</button>
                                        <Modal onClose={() => setShowModal(false)} show={showModal}>
                                            <FormAssess/>
                                        </Modal>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}