import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import LearnMore from '../components/utilities/LearnMore'
import KindsOfTeamImg from '../assets/svg/kindsOfTeam.svg'
import Integrate1 from '../assets/integrate/integrate1.png'
import Integrate2 from '../assets/integrate/integrate2.png'
import Integrate3 from '../assets/integrate/integrate3.png'
import Integrate4 from '../assets/integrate/integrate4.png'
import P18px from '../components/utilities/P18px'

const KindsOfTeam = () => {
  return (
    <section>
        <div className="max-w-container mx-auto p-[30px] mb-[120px]">
            <HeadingH2 className="mb-8" content="Built for all kinds of teams"/>
            <div className="flex gap-2 ">
              {/* ============== index.css common-class (h6_14px)=========== */}
                <h6 className='h6_14px'>UX & Design</h6>
                <h6 className='h6_14px'>Marketing</h6>
                <h6 className='h6_14px'>Product Management</h6>
                <h6 className='h6_14px'>Engineering</h6>
                <h6 className='h6_14px'>Consultants</h6>
                <h6 className='h6_14px'>Agile Coaches</h6>
                <h6 className='h6_14px'>Sales</h6>
            </div>
            <div className="flex justify-between mt-10">
              <div className="w-[360px] px-4"> 
                <ul className='flex gap-4 flex-col mb-9'>
                    <li className='tickMark'>Build low-fi wireframes</li>
                    <li className='tickMark'>Involve stakeholders in the design process</li>
                    <li className='tickMark'>Run engaging design workshops</li>
                </ul>
                <LearnMore/>
                <P18px className="mt-[70px] mb-[14px]" content="Integrate your favorite tools"/>
                  <ul className='flex gap-8'>
                    <li className='h-7 w-7 overflow-hidden'>
                      <img className='w-full h-full object-cover' src={Integrate4} alt=" Integrate4 image" />
                    </li>
                    <li className='h-7 w-7 overflow-hidden'>
                      <img className='w-full h-full object-cover' src={Integrate3} alt=" Integrate3 image" />
                    </li>
                    <li className='h-7 w-8 overflow-hidden'>
                      <img className='w-full h-full object-cover' src={Integrate2} alt=" Integrate2 image" />
                    </li>
                    <li className='h-7 w-7 overflow-hidden'>
                      <img className='w-full h-full object-cover' src={Integrate1} alt=" Integrate1 image" />
                    </li>
                  </ul>
              </div>
              <div className="w-[700px] h-[468px] overflow-hidden">
                <img className='w-full h-full object-cover' src={KindsOfTeamImg} alt="KindsOfTeam Img" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default KindsOfTeam