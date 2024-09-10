import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Navbar() {
  return (
    <div>
      <header>
        <nav className='h-[100px] flex flex-row bg-[#15001E] justify-between items-center'>
          <div className='w-[180px] flex flex-row justify-between text-white size-6  font-rammetto ml-4 items-center'>
            <svg className='w-10 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <div>Home Haven</div>

          </div>
          <div className='hidden md:hidden lg:flex w-[426px] flex-row justify-between text-white size-4 mb-2'>
            <h1>Home</h1>
            <h1>Personal Advert</h1>
            <h1>Wishlist</h1>
            <h1>Subscription</h1>
          </div>
          {/* For mobile and tablets */}
          <div className='md:hidden lg:hidden space-x-1 flex flex-row justify-between items-center text-white'>
            <button className='flex flex-row space-x-2 h-[40px] items-center bg-custom-gradient p-2 px-3 rounded-full'>
              <div>Filter</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            <svg className='md:hidden lg:hidden h-7' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div className='hidden md:flex lg:flex w-[400px] flex-row justify-between text-white size-4 mb-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>

            <button className='hidden md:flex lg:flex flex-row space-x-2 h-[40px] items-center bg-custom-gradient p-2 px-3 rounded-full'>
              <div>ENG</div>
              <img src="england.svg" className="h-5 hidden md:block lg:block" alt="SVG Image" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>


            <button className='hidden md:flex lg:flex flex-row space-x-2 h-[40px] items-center bg-custom-gradient p-2 px-6 rounded-full'>
              <div>Host</div>
            </button>


            <button className='hidden md:flex lg:flex flex-row space-x-2 h-[40px] items-center bg-custom-gradient p-2 px-6 rounded-full'>
              <div>Login/SignIn</div>
            </button>
          </div>
        </nav>
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Navbar
