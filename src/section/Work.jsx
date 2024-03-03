import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import P18px from '../components/utilities/P18px'
import { FaArrowRightLong } from "react-icons/fa6";
import WorkImg from '../assets/svg/work.svg'

const Work = () => {
  return (
    <section>
        <div className="max-w-container mx-auto flex justify-between items-center pb-[120px]">
            <div className="w-[550px]">
                <HeadingH2 className="w-[450px]" content="Work together, wherever you work"/>
                <P18px className="mt-4 mb-10 w-[450px]" content="In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."/>
                <div className="relative w-[148px]">
                    <a className='content18px text-[#4262FF] underline' href="#">Learn more</a>
                    <FaArrowRightLong className='content18px absolute top-1/2 -translate-y-1/2 right-2 text-[#4262FF]' />
                </div>
            </div>
            <div className="w-[555px] h-[535px] overflow-hidden">
                <img className='w-full h-full object-cover' src={WorkImg} alt="Work Img" />
            </div>
        </div>
    </section>
  )
}

export default Work