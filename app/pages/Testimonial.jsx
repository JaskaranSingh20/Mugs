import React from 'react'
import EmblaCarousel from '../components/EmblaCarousel'
import Heading from '../components/Heading'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Testimonial = () => {
  let title = "Testimonials";
  let desc = "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium";
  return (
    <div className='w-full overflow-x-hidden mt-[70px]  md:mt-[140px] ' id='testimonials'>
      <Heading title={title} desc={desc} />
      <EmblaCarousel options={OPTIONS} />
  </div>
  )
}

export default Testimonial