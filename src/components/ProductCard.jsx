import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../products.json'; // Import JSON data

const ProductCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ProductData.map((product) => (
                <div
                    key={product.id}
                    className="w-full h-full flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <Link to={`/product/${product.id}`}>
                        <div className="w-full h-80 overflow-hidden">
                            <img
                                className="w-full h-full object-cover p-8 rounded-t-lg"
                                src={product.image || "/docs/images/products/default-image.png"}
                                alt={product.name}
                            />
                        </div>
                    </Link>
                    <div className="px-5 pb-5 flex-grow">
                        <Link to={`/product/${product.id}`}>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-mitr">
                                {product.name}
                            </h5>
                        </Link>
                        <p className="text-gray-700 dark:text-gray-300 font-mitr">
                            {product.description}
                        </p>
                    </div>
                    <div className="px-5 pb-5 flex items-center justify-between mt-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white font-mitr">
                            ฿{product.price.toFixed(2)}
                        </span>
                        <Link
                            to={`/product/${product.id}`}
                            className="relative inline-block text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-mitr font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                        >
                            ดูรายละเอียด
                            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
