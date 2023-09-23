import React, { useEffect, useRef, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'
import { Transition } from '@tailwindui/react'
import { NAV_MENU } from '../dummyData'
import logo from '../assets/images/logo.svg'
import Loading from './Loading'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropdown = useRef(null)
  const trigger = useRef(null)

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);

  const [isHover, setIsHover] = useState(false);
  const [dropDownOpen, setdropDownOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    })
  }, [userName])
  
  useEffect(() => {
    const clickHandler = ({target}) => {
      if (!dropDownOpen || dropdown.current?.contains(target) || trigger.current?.contains(target)) return;
      setdropDownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return ()=>document.removeEventListener('click', clickHandler)
  })

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    )
  }

  const signInWithGoogle = () => {
    if (!userName) {
      signInWithPopup(auth, provider).then((result) => { setUser(result.user) }).catch((error) => {
        console.log(error)
      })
    }
    else if (userName) {
      signOut(auth, provider).then(() => {
        if (isHover) setIsHover(false)
        dispatch(setSignOutState());
        navigate('/');
      }).catch((error) => alert(error))
    }
  }

  return (
    <nav className='w-full fixed bg-navbarBase z-10'>
      <div className='hidden md:flex justify-between h-[4.4rem] items-center px-4 md:px-[4.9rem] '>
        <img src={logo} alt="Disney+" className='w-20' />
        {!userName ?
        <span
          className='text-white font-semibold text-sm md:text-xl px-4 md:px-6 py-1 border-2 rounded-md cursor-pointer hover:bg-white hover:text-black'
          onClick={signInWithGoogle}  
        >
            Login
        </span>
          :
          <>
            <div className='items-center text-white flex ml-10 mr-auto '>
              {NAV_MENU.map((item, key) =>
                <div key={key}>
                  <div className='flex hover:text-slate-100 transition duration-50 '>
                    <NavLink to={`/${item.name.toLowerCase()}`}  className='flex p-4 items-center'>
                      <img src={item.path} alt="" className='w-10 h-8'/>
                      <span>{item.name}</span>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <div className='text-white'>
              <button className='w-12 pt-2' ref={trigger} onClick={() => { setdropDownOpen(!dropDownOpen);}} >
                <LazyLoadImage src={userPhoto} alt="" className='rounded-full' />
              </button>
              {dropDownOpen && (
                  <div ref={dropdown} className="absolute right-20 mt-2 w-24 bg-black bg-opacity-70 border border-gray-300 shadow-lg rounded-md">
                    <button
                      onClick={signInWithGoogle}
                      className="relative text-sm w-full transition-all px-4 py-2 text-white "
                    >
                      Sign Out
                    </button>
                  </div>
                )}
            </div>
          </>
        }
      </div>

      {/* HEADER MOBILE */}
      <div className='md:hidden flex flex-col just'>
        <div className='flex justify-between m-4'>
          <img src={logo} alt="Disney+" className='w-20' />
          {!userName ?
          <span
            className='text-white w-1/4 font-semibold text-sm flex items-center justify-center border-2 rounded-md cursor-pointer hover:bg-white hover:text-black'
            onClick={signInWithGoogle}  
          >
              Login
          </span>
            :
            <>
              <div className='text-white'>
                <div className='w-12 pt-2' onClick={() => { setdropDownOpen(!dropDownOpen);}} >
                  <img src={userPhoto} alt="" className='rounded-full' />
                </div>
                {dropDownOpen && (
                    <div className="absolute right-5 mt-2 w-24 bg-black border border-gray-300 shadow-lg rounded-md">
                      <button
                        onClick={signInWithGoogle}
                        className="block w-full relative text-sm transition-all duration-300 ease-in-out px-4 py-2 text-white"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
              </div>
            </>
          }
        </div>
        {userName && 
          <div className='text-white flex justify-between mb-3 mr-4 ml-3'>
            {NAV_MENU.map((item, key) =>
              <div key={key}>
                <div className='hover:text-slate-100 text-xs transition duration-50 '>
                  <a href="/home" className='flex p-1 items-center'>
                    {/* <img src={item.path} alt="" className='w-5 h-5'/> */}
                    <span>{item.name}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </nav>
 ) 
}

export default Header