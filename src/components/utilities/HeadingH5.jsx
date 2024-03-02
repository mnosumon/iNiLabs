import React from 'react'

const HeadingH5 = ({content, className}) => {
  return (
    <>
        <h5 className={`text-[23px] font-inter font-extrabold leading-[30px] text-[#FFFFFF] ${className}`}>{content}</h5>
    </>
  )
}

export default HeadingH5