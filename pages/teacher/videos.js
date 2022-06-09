import React, {useState} from 'react';
import Layout from '../../layouts/Layout'
import Modal from '../../components/Teacher/Modal/Modal'
import styles from '../../styles/teacher/Videos0.module.css'
import FormUploadVideo from '../../components/Teacher/FormUploadVideo/FormUploadVideo0';

export default function Couses() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  return (
    <Layout>
    <div className="max-w-2xl mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" flex justify-between my-10">
            <div className={styles.title}>DANH SÁCH VIDEO CỦA KHÓA HỌC</div>
                <div className={styles.btn_add}>
                <button onClick={() => setShowModal1(true)}>Thêm video</button>
                    <Modal onClose={() => setShowModal1(false)} show={showModal1}>
                        <FormUploadVideo/>
                    </Modal>
                </div>
            </div>
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
                                        Video
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Ngày đăng
                                    </th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-24 w-24">
                                                    <img 
                                                        src="../images/imgBottom.svg"
                                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full" 
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="group relative">
                                                        <a href="#">
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            <div className="text-base font-medium text-gray-900">Lession 1</div>
                                                        </a>
                                                        <div className="text-sm text-gray-500">Nhập môn công nghệ phần mềm</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">01/01/2021</div>
                                        </td>
                                        <td > 
                                            <button className="border-none text-lg font-bold  text-red-600" onClick={() => setShowModal(true)}>Xóa</button>
                                            <Modal onClose={() => setShowModal(false)} show={showModal}>
                                                <div className={styles.modal_body}>
                                                    <div className={styles.modal_name_delete}>Bạn có chắc chắn muốn xóa video</div>
                                                    <div className="flex justify-center my-10">
                                                        <button>
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
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