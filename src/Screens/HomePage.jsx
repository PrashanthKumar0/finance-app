import React from 'react'

function HomePage() {
  return (
    <div className="bg-black h-[100vh] text-white" style={{
      background:"radial-gradient(circle at 100% 200%,midnightblue,black)"
    }}>
      <div className="flex flex-col gap-4 ">
        <div className='font-bold text-5xl'>slogan</div>
        <div><p>Empowering Your Financial Journey</p></div>
      </div>
    </div>
  )
}

export default HomePage