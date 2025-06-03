import { useState } from 'react'
import { FaBars, FaTimes, FaMinus, FaPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const [isSidebarOPen, setSidebarOpen] = useState(false)
    const [isMakeupOPen, setMakeupOPne] = useState(false)
    const [isCatOpen, setCatOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOPen)
    }
    const toggleMakeuo = () => {
        setMakeupOPne(!isMakeupOPen)
    }
    const toggleCategory = () => {
        setCatOpen(!isCatOpen)
    }

    const logout = () => {
        navigate('/')
    }
    return (
        <>
            <div className=" font-poppin">
                <nav className="bg-[#3F3F3F] text-white flex justify-between items-center px-6 py-4">
                    <div className="text-xl font-semibold font-poppin"><Link to='/product'>Hashtechy</Link></div>
                    <div>
                        <button onClick={logout} className="mr-5 font-poppin cursor-pointer">
                            Logout
                        </button>
                        <button onClick={toggleSidebar} className="mr-5 cursor-pointer">
                            <FaBars size={20} />
                        </button>
                    </div>
                </nav>

                {/* Sidebar */}
                <div className={`fixed top-15 right-0 h-full w-64 bg-[#D6D6D6] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOPen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold font-poppin">Close Menu</h2>
                            <button onClick={toggleSidebar} className='cursor-pointer'>
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <ul className='space-y-2  text-gray-900'>
                            <li className='flex justify-between items-center font-semibold cursor-pointer'><Link to='/product'>All Products</Link></li>
                            <div onClick={toggleCategory} className='flex justify-between items-center font-semibold cursor-pointer'>
                                <span>Categories</span>
                                {isCatOpen ? <FaMinus /> : <FaPlus />}
                            </div>
                            {/* The category dropdown menu will comes here */}
                            <li>
                                <div onClick={toggleMakeuo} className='flex justify-between items-center font-semibold cursor-pointer'>
                                    <span>Make Up</span>
                                    {isMakeupOPen ? <FaMinus /> : <FaPlus />}
                                </div>
                                {isMakeupOPen && (
                                    <ul className='ml-4 mt-2 space-y-2 text-sm text-gray-700'>
                                        <li className='cursor-pointer'>Face Makeup</li>
                                        <li className='cursor-pointer'>Lip Makeup</li>
                                        <li className='cursor-pointer'>Eye Makeup</li>
                                        <li className='cursor-pointer'>Brushes & Tools</li>
                                    </ul>
                                )}
                            </li>
                            <li className='flex justify-between items-center font-semibold cursor-pointer'><Link to='/cart'>My cart</Link></li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navigation
