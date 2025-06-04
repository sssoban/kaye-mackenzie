import React from 'react'
import WhoWeAreComponent from './WhoWeAreComponent'
import WhyUsComponent from './WhyUsComponent'

const OurStorySection = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:px-50 py-30'>
        <WhoWeAreComponent/>
        <WhyUsComponent/>
    </div>
  )
}

export default OurStorySection