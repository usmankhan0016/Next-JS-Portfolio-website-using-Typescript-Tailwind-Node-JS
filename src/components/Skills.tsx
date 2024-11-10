import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className='text-4-xl md:text-5xl'data-aos="fade-right">
                Technologies I Work With:
            </h2>
            <p className='text-gray-500 pt-2' data-aos="fade-right">
            I possess a strong foundation in web development,specializing in HTML, CSS, and JavaScript, along with experience in building interactive applications using frameworks like React and Next.js. My knowledge of Tailwind CSS allows me to create clean, responsive designs efficiently. I am dedicated to keeping up with the latest trends and technologies to enhance my capabilities and deliver impactful results in my projects.
            </p>
              </div>
              <div>
                <div className='grid grid-cols-2 text-blue-300 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="fade-left">Typescript</h2>
                        <h2 data-aos="fade-left">React.JS</h2>
                        <h2 data-aos="fade-left">Next-JS</h2>
                    </div>

                    <div className='space-y-2'>
                        <h2 data-aos="fade-left">Tailwind</h2>
                        <h2 data-aos="fade-left">CSS</h2>
                        <h2 data-aos="fade-left">Node-JS</h2>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
