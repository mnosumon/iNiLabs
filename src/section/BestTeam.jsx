import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import { FaArrowRightLong } from 'react-icons/fa6'
import BestTeam1 from '../assets/bestTeam/bestTeam1.png'
import BestTeam2 from '../assets/bestTeam/bestTeam2.png'
import BestTeam3 from '../assets/bestTeam/bestTeam3.png'
import BestTeamPeople1 from '../assets/bestTeam/bestTeamPeople1.png'
import BestTeamPeople2 from '../assets/bestTeam/bestTeamPeople2.png'
import BestTeamPeople3 from '../assets/bestTeam/bestTeamPeople3.png'
import P18px from '../components/utilities/P18px'

const BestTeam = () => {
  return (
    <section>
        <div className="max-w-container mx-auto mt-[100px]">
            <div className="flex flex-col items-center gap-6 mb-10">
                <HeadingH2 content="Loved by the world's best teams"/>
                <div className="relative w-[292px] border border-[#4262FF] rounded-3xl">
                    <button className="text-base font-inter font-normal leading-4 py-3 px-10  text-[#4262FF]">See all customer stories
                    </button>
                    <FaArrowRightLong className='text-bas absolute top-1/2 -translate-y-1/2 right-7 text-[#000]'/>
                </div>
            </div>
            <div className="flex gap-5 justify-between items-center"> 
                <div className="p-9">
                    <div className="h-14">
                        <div className="w-[182px] h-[30px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeam3} alt=" BestTeam3" />
                        </div>
                    </div>
                    <P18px className="h-[260px] w-[292px] pb-9 pt-4" content="“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”" />
                    <div className="flex gap-4">
                        <div className="w-[48px] h-[48px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeamPeople1} alt="BestTeamPeople1" />
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            {/* ============== index.css common-class (content14px)=========== */}
                            <span className='content14px'>Roxanne Mustafa</span>
                            <span className='content14px'>Design Team Lead at VMware</span>
                        </div>
                    </div>
                </div>
                <div className="p-9">
                    <div className="h-14">
                        <div className="w-[192px] h-[43px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeam2} alt="BestTeam2" />
                        </div>
                    </div>
                    <P18px className="h-[260px] w-[292px] pb-9 pt-4" content="“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”"/>
                    <div className="flex gap-4">
                        <div className="w-[48px] h-[48px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeamPeople2} alt="BestTeamPeople2" />
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            {/* ============== index.css common-class (content14px)=========== */}
                            <span className='content14px'>Jane Ashley</span>
                            <span className='content14px'>Head of Design at DocuSign</span>
                        </div>
                    </div>
                </div>
                <div className="p-9">
                    <div className="h-14">
                        <div className="w-[88px] h-[52px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeam1} alt="BestTeam1" />
                        </div>
                    </div>
                    <P18px className="h-[260px] w-[292px] pb-9 pt-4" content="“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”"/>
                    <div className="flex gap-4">
                        <div className="w-[48px] h-[48px] overflow-hidden">
                            <img className='w-full h-full object-cover' src={BestTeamPeople3} alt="BestTeamPeople3" />
                        </div>
                        <div className="flex flex-col gap-[3px]">
                            {/* ============== index.css common-class (content14px)=========== */}
                            <span className='content14px'>Laura Baird</span>
                            <span className='content14px'>Associate Design Director at frog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BestTeam