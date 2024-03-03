import React from 'react'

const P18px = ({className, content}) => {
  return (
    <>
        <p className={`text-xl leading-6 font-inter font-normal text-[#050038] ${className}`}>{content}</p>
    </>
  )
}

export default P18px