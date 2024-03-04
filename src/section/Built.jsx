import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import P18px from '../components/utilities/P18px'
import LearnMore from '../components/utilities/LearnMore'
import BuiltImg from '../assets/svg/built.svg'

const Built = () => {
  return (
    <section>
        <div className="max-w-container mx-auto p-[30px] mb-[120px]">
            <HeadingH2 className="mb-8" content="Built for the way you work"/>
            <div className="flex justify-between ">
                <h6 className='h6_14px'>Brainstorming</h6>
                <h6 className='h6_14px'>Diagramming</h6>
                <h6 className='h6_14px'>Meetings & Workshops</h6>
                <h6 className='h6_14px'>Scrum Events</h6>
                <h6 className='h6_14px'>Mapping</h6>
                <h6 className='h6_14px'>Research & Design</h6>
                <h6 className='h6_14px'>Strategic Planning</h6>
            </div>
            <div className="flex justify-between mt-10">
              <div className="w-[360px] p-4"> 
                  <article className='content18px opacity-100'>Brainstorming</article>
                  <article className='content18px opacity-70 my-7'>Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</article>
                  <LearnMore/>
              </div>
              <div className="w-[700px] h-[472px] overflow-hidden">
                <img className='w-full h-full object-cover' src={BuiltImg} alt="Built Img" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Built