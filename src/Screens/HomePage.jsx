import { Button } from '@nextui-org/react'
import React from 'react'

function HomePage() {
  return (
    <div className="h-[100vh] text-white backdrop-blur-xl z-1 bg-black/30 flex flex-col md:flex-row flex-wrap justify-around items-center">
      <div className="flex flex-col gap-4">
        <div className='font-bold text-5xl'>slogan</div>
        <div><p>Empowering Your Financial Journey</p></div>
        <Button variant='solid' color="primary" className='mt-10 inline-block mr-auto'> Get Started</Button>
      </div>
      <div className="flex flex-col gap-4 ">
        <img className='max-w-[500px]' src="/chart.png"/>
      </div>
    </div>
  )
}

export default HomePage