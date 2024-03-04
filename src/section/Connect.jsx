import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import P18px from '../components/utilities/P18px'
import { FaArrowRightLong } from 'react-icons/fa6'
import ConnectImg from '../assets/svg/connect.svg'

const Connect = () => {
  return (
    <section>
    <div className="max-w-container mx-auto flex justify-between items-center pb-[120px]">
        <div className="w-[555px] h-[500px] overflow-hidden">
            <img className='w-full h-full object-cover' src={ConnectImg} alt="Connect Img" />
        </div>
        <div className="w-[465px]">
            <HeadingH2 className="w-[450px]" content="Connect your tools, close your tabs"/>
            <P18px className="mt-7 mb-[52px] w-[460px] text-justify" content="Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."/>
            <div className="relative w-[148px]">
                <a className='content18px text-[#4262FF] underline' href="#">Learn more</a>
                <FaArrowRightLong className='content18px absolute top-1/2 -translate-y-1/2 right-2 text-[#4262FF]' />
            </div>
        </div>

    </div>
</section>
  )
}

export default Connect