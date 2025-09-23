'use client'
import Image from 'next/image'

export default function LifeAtRDIGS() {
  const images = [
    { src: '/life-at-rdigs/1.png', alt: 'Life at RDIGS' },
    { src: '/life-at-rdigs/2.png', alt: 'Teamwork at RDIGS' },
    { src: '/life-at-rdigs/3.png', alt: 'RDIGS Events' },
    { src: '/life-at-rdigs/4.webp', alt: 'Work Culture' },
    { src: '/life-at-rdigs/5.webp', alt: 'Fun at RDIGS' },
    { src: '/life-at-rdigs/6.webp', alt: 'Success Stories' },
    { src: '/life-at-rdigs/7.png', alt: 'Innovation' },
    { src: '/life-at-rdigs/8.webp', alt: 'Growth' },
    { src: '/life-at-rdigs/9.png', alt: 'Team Spirit' },
  ]

  return (
    <section className="bg-[#F2F5F9] py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Left Column - White container */}
          <div className="fadeInLeft">
            <div className="bg-white rounded p-12 h-full">
              <h4 className="text-[#3099D5] text-[24px] mb-2">Life At RDIGS</h4>
              <h1 className="text-[56px] leading-[67px] font-[700] mb-4">
                RDIGS Where Employees Thrive Together
              </h1>

              <p className="text-[#606060] mb-6">
                At RDIGS, we foster an employee-centric environment where every team member is valued as part of our family.
                We stand by the belief that "Employees are the voice of every organization." Our commitment goes beyond just work—we strive to
                excel in everything we do, whether it's achieving professional milestones or creating memorable moments of fun.
              </p>

              {/* Counters */}
              <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">100+</h2>
                  <p className="text-[#000000] font-bold text-[12px] mb-0">Team Members</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">12+</h2>
                  <p className="text-[#000000] font-bold text-[12px] mb-0">Years of Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">8+</h2>
                  <p className="text-[#000000] font-bold text-[12px] mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="fadeInRight">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={220}
                    height={220}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
