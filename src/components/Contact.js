import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/677784b5-87e8-4df4-b9bf-bbaa41a67019' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#61dafb] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'> 
            / / Submit the form below or shoot me an email - okeaniafree@gmail.com
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name="name"/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name="email"/>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#61dafb] hover:border-[#61dafb] px-4 py-3 my-8
        mx-auto flex items-center hover:scale-75 duration-200'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact