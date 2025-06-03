import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navigation from './navbars/Navigation'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Product = ({ cart, setCart }) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {


        const productApi = import.meta.env.VITE_PRODUCT_API;
        axios.get(productApi)
            .then((response) => {
                setProducts(response.data)
                console.log(response.data)

            }).catch((error) => {
                console.error("Error fetching products", error)
            })
    }, []);


    const addToCart = (Product) => {
        const existing = cart.find((item) => item.id === Product.id)
        if (existing) {
            Swal.fire({
                icon: 'info',
                title: "Already in Cart",
                text: 'This product is already in your cart'
            });
            return;
        }
        const productWithQty = { ...Product, quantity: 1 };
        setCart([...cart, productWithQty])
        Swal.fire({
            icon: 'success',
            title: 'Added to cart!',
            text: 'Product added to the cart successfully'
        }).then(() => {
            navigate('/cart')
        })
    }
    return (
        <>
            {/* Navigation header */}
            <Navigation />
            <div className="min-h-screen p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Product Listing
                </h1>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {products.map((product) => (
                        <div className="bg-transparent rounded-xl shadow=md p-4 flex flex-col" key={product.id}>
                            {/* Image */}
                            <div className="h-48 flex items-center justify-center bg-transparent">
                                <img src={product.image} alt={product.title} className='object-contain h-40 w-40' />
                            </div>
                            {/* Product name */}
                            <h2 className="mt-4 text-md font-semibold text-gray-800 line-clamp-1">
                                {product.title}
                            </h2>
                            {/* Description */}
                            <p className="text-gray-600 text-sm mt-2 h-16 overflow-hidden">
                                {product.description}
                            </p>
                            {/* Price */}
                            <h2 className="mt-4 text-md font-bold text-gray-800 line-clamp-1">
                                &#8377; {product.price}
                            </h2>

                            {/* Add to cart button */}
                            <div className="mt-auto pt-4">
                                <button onClick={() => addToCart(product)} className="cursor-pointer w-full bg-[#3F3F3F] text-white py-2 rounded hover:bg-[#2f2d2d] transition">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
