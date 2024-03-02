import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import HeadingH5 from '../../components/utilities/HeadingH5';

const Footer = () => {
  return (
    <section className='bg-[#02033B]'>
        <div className="max-w-container mx-auto py-24">
            <div className="">
                <HeadingH5 className='text-[#FFF]' content="Scan. Detect. Remove."/>
                <div className="flex gap-10 my-12">
                    <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                        <FaFacebookF className='text-2xl' />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                        <FaTwitter className='text-2xl' />
                    </div>
                    <div className="h-9 w-9 flex items-center justify-center bg-[#FFFFFF] rounded-[5px]">
                        <FaYoutube className='text-2xl' />
                    </div>
                </div>
                <div className="flex gap-[26px]">
                    <a className='content11px underline' href="#">Privacy Policy</a>
                    <a className='content11px underline' href="#">Terms of Service</a>
                </div>
                <div className="mt-12">
                    <span className='content11px'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</span>
                </div>
                <div className="mt-5">
                    <span className='content11px'>Designed & developed by <a className='content11px underline' href="#">Bigger Picture</a></span>
                </div>
            </div>
            <div className="">
                <h3 className='text-[35px] font-inter font-extrabold leading-[45px] text-[#FFFFFF]'>Miro.</h3>
                <hr className='w-[178px] mt-[25px]' />
            </div>
            <ul>
                <li className='device'>Android</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer