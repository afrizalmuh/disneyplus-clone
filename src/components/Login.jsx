import React from 'react'
import headerLogo from '../assets/images/cta-logo-one.svg'
import tailLogo from '../assets/images/cta-logo-two.png'
import loginBackground from '/src/assets/images/login-background.jpg'

const Login = () => {
  return (
    <div className='overflow-hidden flex flex-col text-center h-screen'>
      <div className='h-full w-full relative box-border flex flex-col items-center justify-center'>
        <div className='max-w-2xl w-full flex flex-col mt-0 justify-center items-center text-white '>
          <img src={headerLogo} alt="logo-one" className='w-3/4 mb-5' />
          <h3 className='bg-blueLogin w-1/2 py-3 rounded-md font-semibold text-sm md:text-xl mb-8'>GET ALL THERE</h3>
          <div className='w-3/4 md:w-full'>
            <p className='tracking-widest text-xs md:text-lg'>
              Get Premier Access to Raya and the Last Dragon for an additional fee with a
              Disney+ subscription. As of 09/09/23, the price of Disney+ and The Disney Bundle will increase by $1.
            </p>
          </div>
          <img src={tailLogo} alt="logo-two" className='w-4/5 mt-6' />
        </div>
        <div className={`h-full w-full bg-cover bg-no-repeat absolute z-[-1] bg-home-login`} >
        </div>
      </div>
    </div>
  )
}

export default Login