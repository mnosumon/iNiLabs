import React from 'react'
import P18px from '../components/utilities/P18px'
import Walmart from '../assets/image/walmart.png'

const User = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <P18px className="" content="Trusted by 45M+ users"/>
            <div className="">
                <div className="h-7 w-[117px] overflow-hidden">
                    <img className='h-full w-full object-cover' src={Walmart} alt="Walmart"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default User