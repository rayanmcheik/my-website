import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white bg-black ">
      <div className="grid grid-cols-1 gap-2 mx-auto max-w-7xl md:grid-cols-4">


        <div className='flex self-center justify-center object-center'>
          <h1 className='text-4xl font-bold tracking-wide'>
            More Information
            </h1>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Overview</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Investors</a></li>
            <li><a href="#" className="hover:text-white">Media Site</a></li>
          </ul>
        </div>


        <div>
          <h3 className="mb-4 text-lg font-semibold">Knowledge</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Dedicated to detail</a></li>
            <li><a href="#" className="hover:text-white">Our history</a></li>
            <li><a href="#" className="hover:text-white">Real Driving Emissions</a></li>
          </ul>
        </div>


        <div>
          <h3 className="mb-4 text-lg font-semibold">Business Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Fleet Sales</a></li>
            <li><a href="#" className="hover:text-white">International Diplomatic Sales</a></li>
            <li><a href="#" className="hover:text-white">Mercedes-Benz GUARD</a></li>
            <li><a href="#" className="hover:text-white">Training for Authorized Dealers</a></li>
          </ul>
        </div>

      </div>

 
    </footer>
  )
}

export default Footer