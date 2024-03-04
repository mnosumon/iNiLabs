import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import LearnMore from '../components/utilities/LearnMore'
import KindsOfTeamImg from '../assets/svg/kindsOfTeam.svg'

const KindsOfTeam = () => {
  return (
    <section>
        <div className="max-w-container mx-auto p-[30px] mb-[120px]">
            <HeadingH2 className="mb-8" content="Built for all kinds of teams"/>
            <div className="flex gap-2 ">
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