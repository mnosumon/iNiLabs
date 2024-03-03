import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import P18px from '../components/utilities/P18px'
import Button from '../components/utilities/Button'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Frame from '../assets/image/frame.png'
import GetApp from '../assets/image/getApp.png'
import CapTerra from '../assets/image/capTerra.png'
import BannerImg from '../assets/svg/banner.svg'

const Banner = () => {
  return (
    <section>
        <div className="max-w-container mx-auto flex justify-between py-[60px]">
            <div className="w-[440px]">
                <HeadingH2 className="" content="Take ideas from better to best"/>
                <P18px className="mt-4 mb-8" content="Miro is your team's visual platform to connect, collaborate, and create — together."/>
                <div className="w-full">
                    <input className='text-xl leading-6 font-inter font-normal text-[#5F5C80] py-3 pl-6 pr-10 border border-[#9B99AF] outline-none rounded-[32px] w-full' type="text" placeholder='Enter your work email' />
                </div>
                <div className="w-full bg-[#4262FF] text-center rounded-[32px] my-[10px]">
                    <Button className="py-[15px] px-14 " content="Sing up free"/>
                </div>
                <p className='content14px'>Collaborate with your team within minutes</p>
                <div className="flex gap-3 items-center mt-10">
                    <div className="">
                        <div className="flex gap-[6px]">
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaStarHalfAlt className='star'/>
                        </div>
                        <span className='content11px text-[#050038]'>Based on 5149+ reviews:</span>
                    </div>
                    <div className="flex gap-[15px] px-[15px] items-center">
                        <div className="h-[18px] w-[18px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={Frame} alt="Frame" />
                        </div>
                        <div className="h-[13px] w-[50px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={GetApp} alt="GetApp" />
                        </div>
                        <div className="h-[14px] w-[59px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={CapTerra} alt="CapTerra" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[655px] h-[469px] overflow-hidden object-cover">
                <img  className='w-full h-full object-cover' src={BannerImg}  alt="Banner Img" />
            </div>
        </div>
    </section>
  )
}

export default Banner