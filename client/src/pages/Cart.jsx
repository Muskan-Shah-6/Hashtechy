import React from 'react'
import Navigation from './navbars/Navigation'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = ({ cartItems, setCartItems }) => {
    const navigate = useNavigate()

    // For updating the quantity
    const updateQuantity = (index, delta) => {
        const updateCart = [...cartItems]
        const newQty = updateCart[index].quantity + delta;
        if (newQty > 1) {
            updateCart[index].quantity = newQty
            setCartItems(updateCart)
        }
    }

    const deleteItem = (index) => {
        const updateCart = [...cartItems];
        updateCart.splice(index, 1);
        setCartItems(updateCart)
    }

    const handleCheckout = () => {
        Swal.fire({
            icon: 'success',
            title: 'checkout Successfull',
            text: 'Thank you for your purchase !',
        }).then(() => {
            setCartItems([]);
            navigate('/product')
        })
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <>
            <Navigation />

            <div className="p-4 sm:p-8 bg-gray-1 min-s-screen">
                <h1 className="text-3xl font-bol mb-6 text-center font-poppin font-bold">My Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center mt-10">
                        <p className="text-lg font-medium mb-4 text-gray-600 font-poppin">
                            No Product Added to the cart.
                        </p>
                        <button onClick={() => navigate('/product')} className="bg-[#3F3F3F] text-white  cursor-pointer hover:bg-[#2f2d2d] px-5 py-2 rounded">
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="hidden sm:grid grid-cols-12 gap-4 font-bold text-lg border-b pb-3 mb-4">
                            <div className="col-span-4">Name</div>
                            <div className="col-span-3 text-center">Price</div>
                            <div className="col-span-3 text-center">Quantity</div>

                           
                        </div>
                        {cartItems.map((item, index) => (
                            <div key={index}
                                className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 py-4 border-b"
                            >
                                {/* Product Info */}
                                <div className="sm:col-span-5 flex flex-col sm:flex-row sm:items-center gap-3">
                                    <img src={item.image} alt={item.title} className='h-16 w-16 object-cover rounded bg-gray-300' />
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className='text-sm text-gray-600 '>{item.description}</p>
                                    </div>

                                </div>

                                {/* Price */}
                                <div className="sm:col-span-2 text-center font-semibold">
                                    &#8377;{item.price}
                                </div>

                                {/* Quantity */}
                                <div className="sm:col-span-3 flex sm:justify-center items-center gap-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <button onClick={() => updateQuantity(index, -1)} className="bg-gray-800 text-white px-2 rounded cursor-pointer">
                                            &#8722;
                                        </button>
                                        <span className="w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(index, 1)} className="bg-gray-800 text-white px-2 rounded cursor-pointer">
                                            &#43;
                                        </button>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="sm:col-span-2 flex justify-center">
                                    <button onClick={() => deleteItem(index)} className="text-red-600 text-xl hover:text-red-800 cursor-pointer">
                                        <FaTrashAlt />
                                    </button>
                                </div>

                            </div>
                        ))}

                        {cartItems.length > 0 && (
                            <div className="mt-6 flex flex-col sm:flex-row justify-around items-center  pt-4">
                                <div></div>
                                <h2 className="text-2xl font-bold  mb-4 sm:mb-0">
                                    Total: ₹{total.toFixed(2)}
                                </h2>
                                <button
                                    onClick={handleCheckout}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded cursor-pointer"
                                >
                                    Checkout
                                </button>
                            </div>
                        )}
                    </>

                )}

            </div>

        </>
    )
}

export default Cart
