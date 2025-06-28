import React from 'react'

const WrapperMargin = ({children}) => {
  return (
    <div className='w-[95%] sm:max-w-[1200px] mx-auto'>
        {children}
    </div>
  )
}

export default WrapperMargin