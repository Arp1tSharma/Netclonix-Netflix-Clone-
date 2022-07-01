import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {logout} = useAuth();

    useEffect(() => {
      const handleScroll = () =>{
        if(window.scrollY > 0){
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
      }
    
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <header className={`${isScrolled &&'bg-[#141414]' }`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className='relative flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden sm:inline h-6 w-6' />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='h-6 w-6' />
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                        onMouseOver={()=> setShowMenu(true)}
                    />
                    {showMenu &&
                    
                    <div className='absolute top-10 right-0 bg-black/70 w-32 rounded-md rounded-tr-none px-5 py-2 gap-3 flex flex-col text-gray-400' onMouseLeave={() => setShowMenu(false)}>
                        
                    <Link href="/account">
                        <a className='menu'>My Account</a>
                    </Link>
                    <a className='menu' onClick={()=>logout()}>Logout</a>
                    </div>
                    }
            </div>
        </header>
    )
}

export default Header