import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('ส่งข้อความสำเร็จ');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            ชื่อ
          </label>
          <input
            id="name"
            {...register('name', { required: 'กรุณากรอกชื่อ' })}
            className={`block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-900 dark:text-white ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="ชื่อของคุณ"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            อีเมล
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'กรุณากรอกอีเมล',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'รูปแบบอีเมลไม่ถูกต้อง',
              },
            })}
            className={`block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-900 dark:text-white ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="example@domain.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            ข้อความ
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'กรุณากรอกข้อความ' })}
            rows="4"
            className={`block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-opacity-50 dark:bg-gray-900 dark:text-white ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="เขียนข้อความของคุณที่นี่"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          ส่งข้อความ
        </button>
      </form>
    </div>
  );
};

export default Contact;
