import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-6 px-10 bg-(--c2)'>
            <Link to={'/'} className='font-medium text-2xl'>Media Search</Link>
            <div className='flex gap-5 items-center'>
                <Link to={'/'} className='text-base font-medium bg-white text-(--c1) roundex px-4 py-2'>Search</Link>
                <Link to={'/collection'} className='text-base font-medium bg-white text-(--c1) roundex px-4 py-2'>Collection</Link>
            </div>
        </div>
    )
}
