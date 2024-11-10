import React from 'react'
import { MdMail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8' data-aos="fade-right">
            <h2 className='text-5xl'>Get in touch</h2>
            <p className='text-gray-500 text-[18px] pt-2'>
                You can drop a line, make me a call or send a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center'>
            < MdMail size={30}/> usmanbinkhan15@gmail.com
            </div>

            <div className='flex gap-3 items-center'>
            <  BsTelephoneInbound size={27}/> (+92)000-000000
            </div>
        </div>
        <div className='space-y-8' data-aos="fade-left">
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" className='h-[40px] bg-transparent border border-blue-400' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" className='h-[40px] bg-transparent border border-blue-400' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Message</label>
                <textarea id='=msg' className='bg-transparent border border-blue-400' rows={8}></textarea>
            </div>
            <button className='bg-blue-500 p-2 px-6'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
