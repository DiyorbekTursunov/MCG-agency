import React from 'react'

const Custum_button = ({children}) => {
  return (
    <button className='bg-[#FF698D] py-[20px] max-sm:py-[15] px-[54px] max-sm:w-full text-[16px] font-semibold text-[#ffff] rounded-[192px] border-2 border-white'>
        {children}
    </button>
  )
}

export default Custum_button
