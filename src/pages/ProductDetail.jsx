import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../products.json'; // Import JSON data

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id.toString() === id);

  if (!product) {
    return <p className="text-center text-red-500">ไม่พบข้อมูลสินค้า</p>;
  }

  return (
    <div className="container mx-auto p-6 font-mitr">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center p-6">
          <img
            className="w-1/2 h-auto object-contain rounded-lg"
            src={product.image}
            alt={product.name}
          />
          <div className="ml-6 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{product.description}</p>
              <p className="text-2xl font-semibold mt-6 text-green-700 dark:text-green-400">
                ราคา: ฿{product.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => window.history.back()}
                className="relative inline-block text-white bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-mitr font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                กลับ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
