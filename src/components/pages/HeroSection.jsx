import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[90vh]' style={{backgroundImage:"url('/src/assets/sttu.webp')",
    backgroundSize:"cover",
    backgroundPosition:"center"
    }}>
      <h2 className='text-4xl md:text-6xl font-bold text-gray-700 mb-4'> Welcome to My Website </h2>
      <p className='text-lg md:text-xl mb-4 text-gray-700'> Your Journey Start Here </p>
      <button className='bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'> Purchase Products </button>
    </div>
  )
}

export default HeroSection
