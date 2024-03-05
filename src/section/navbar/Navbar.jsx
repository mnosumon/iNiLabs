import React, { useState } from 'react'
import Logo from '../../assets/image/logo.png'
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Button from '../../components/utilities/Button';

const Navbar = () => {
    let [product, setProduct] = useState(false)
    let handleMenu = ()=>{
        setProduct(!product)
    }
  return (
    <section>
        <div className="w-[1380px] mx-auto flex gap-[280px] items-center justify-between">
            <div className="flex gap-6">
                <div className="w-[91px] h-8 overflow-hidden">
                    <img className='w-full h-full object-cover' src={Logo} alt="Logo" />
                </div>
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        {/* ============index.css => (content16px) common class============= */}
                        <div className="flex gap-[14px] items-center">
                            <span className='content16px'>Product</span>
                            <div onClick={handleMenu} className='text-sm'>
                                { product ? <IoIosArrowUp /> : <FaChevronDown /> } 
                            </div>
                        </div>
                        {
                        product &&
                        <ul className='absolute top-[35px] left-0'>
                            <li>
                                <a className='content16px' href="#">Product1</a>
                            </li>
                            <li>
                                <a className='content16px' href="#">Product2</a>
                            </li>
                            <li>
                                <a className='content16px' href="#">Product3</a>
                            </li>
                            <li>
                                <a className='content16px' href="#">Product4</a>
                            </li>
                            <li>
                                <a className='content16px' href="#">Product5</a>
                            </li>
                        </ul>  
                        }
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <span className='content16px'>Solutions</span>
                        <FaChevronDown className='text-sm' /> 
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <span className='content16px'>Resources</span>
                        <FaChevronDown className='text-sm' /> 
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <span className='content16px'>Enterprise</span>
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <span className='content16px'>Pricing</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center content16px">
                        <TbWorld className='text-2xl' />
                        <span className='content16px'>EN</span>
                    </div>
                    <div className="">
                        <span className='content16px'>Contact Sales</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <button className='transition-all duration-500 py-4 px-7 rounded-[30px] hover:leading-4 text-[#050038]  hover:bg-[#4262FF] hover:text-[#FFF] leading-4 text-base font-inter font-normal'>Login</button>
                    <Button className='py-4 pl-7 pr-14 rounded-[30px]' content='Sing up free'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar