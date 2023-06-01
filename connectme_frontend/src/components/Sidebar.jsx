import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { TiArrowForward } from 'react-icons/ti'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiHome } from 'react-icons/hi'


const Sidebar = ({ user, closeToggle }) => {

    const categories = [
        { name: 'Animals' },
        { name: 'Photography' },
        { name: 'Wallpapers' },
        { name: 'Gaming' },
        { name: 'Coding' },
        { name: 'Others' }
    ]


    const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
    const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'

    const handleCloseSidebar = () => {
        if (closeToggle) {
            closeToggle(false)
        }
    }
    return (
        <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
            <div className='flex flex-col'>
                <Link to="/" className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSidebar}>
                    <div className='flex justify-center items-end space-x-1 '>
                        <div className='flex justify-center align-center'>
                            <BsFillPeopleFill className='w-6 h-6 text-blue-600' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text-black text-md font-semibold'>ConnectMe</p>
                        </div>
                    </div>
                </Link>
                <div className='flex flex-col gap-5'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}>
                        <FaHome
                        />
                        Home
                    </NavLink>
                    <h3 className='mt-2 px-5 text-gray-500 text-base xl:text-xl'>Discover categories</h3>
                    {categories.slice(0, categories.length - 1).map((category) => (
                        <NavLink to={`/category/${category.name}`}
                            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                            onClick={handleCloseSidebar}
                            key={category.id}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user &&
                (
                    <Link
                        to={`user-profile/${user._id}`}
                        className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
                        onClick={handleCloseSidebar}
                    >
                        <img
                            src={user.image}
                            className='w-10 h-10 rounded-full'
                            alt='user-profile'
                        />
                        <p>{user.userName}</p>
                    </Link>
                )
            }

        </div>
    )
}

export default Sidebar