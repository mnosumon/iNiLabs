import React from 'react'
import HeadingH2 from '../components/utilities/HeadingH2'
import HeadingH4 from '../components/utilities/HeadingH4'
import P18px from '../components/utilities/P18px'
import Button from '../components/utilities/Button'

const Collaborate = () => {
  return (
    <section>
        <div className="max-w-container mx-auto pt-[100px] pb-24 relative">
            <div className="bg-[#FFD02F] w-[208px] rotate-12 rounded-[8px] absolute top-16 left-1/2">
                <p className='py-[6px] px-2 uppercase font-inter font-bold'>your idea start here</p>
            </div>
            <div className="flex justify-center mb-3">
                <HeadingH2 className="w-[462px] text-center" content="Collaborate without constraints"/>
            </div>
            <div className="flex justify-between px-[10px]">
                <div className="px-6 pt-6 pb-11 w-[360px]">
                    <HeadingH4 className="mb-[30px]" content="Free forever" />
                    <article className='content18px'>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a className='content18px text-[#4262FF] cursor-pointer'>Pricing plans</a> for more features.</article>
                </div>
                <div className="px-6 pt-6 pb-11 w-[360px]">
                    <HeadingH4 className="mb-[30px]" content="Free forever" />
                    <article className='content18px'>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a className='content18px text-[#4262FF] cursor-pointer'>Marketplace</a></article>
                </div>
                <div className="px-6 pt-6 pb-11 w-[360px]">
                    <HeadingH4 className="mb-[30px]" content="Free forever" />
                    <article className='content18px'>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <a className='content18px text-[#4262FF] cursor-pointer'>Trust Center</a> .</article>
                </div>
            </div>
            <div className="text-center mt-10">
                <Button className="py-3 px-12 rounded-3xl" content="Sign up free"/>
            </div>
        </div>
    </section>
  )
}

export default Collaborate