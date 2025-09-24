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

  const benefits = [
    {
      img: "/life-at-rdigs/Growing.png",
      title: "Growing",
      desc: "RDIGS provides all employees with the opportunity to grow both professionally and personally through exciting internal jobs and promotions.",
    },
    {
      img: "/life-at-rdigs/Fun-Friday.png",
      title: "Fun Friday's",
      desc: "All work and no play. Our employees enjoy a healthy balance of work and fun with a weekly session of fun games, team activities along with informative sessions.",
    },
    {
      img: "/life-at-rdigs/Bi-Yearly-Parties (1).png",
      title: "Bi-Yearly Parties",
      desc: "Work hard and party harder. RDIGS does not limit itself to a yearly corporate gig. We sing, we dance, we laugh, and our parties are filled with glamour and fun.",
    },
    {
      img: "/life-at-rdigs/Uncaped-Incentives.png",
      title: "Uncaped Incentives",
      desc: "We recognize our stars and reward our performers. Our employees are self-driven and earn uncapped incentives every month.",
    },
    {
      img: "/life-at-rdigs/Fixed-Weekend.png",
      title: "Fixed Weekend off's",
      desc: "We believe that spending time with family and having some alone time is very important, RDIGS discourages shift extensions and makes sure that all our employees get the well-deserved time off.",
    },
    {
      img: "/life-at-rdigs/Team-Outfit.png",
      title: "Team Outfit's",
      desc: "The best therapy in the work is spending time with your mates and there is no time to be bored in a world as beautiful as ours. RDIGS Team enjoys team outings to beaches, mountains, valleys and villas.",
    },
    {
      img: "/life-at-rdigs/Open-Door-Policy (1).png",
      title: "Open Door Policy",
      desc: "We believe in an open-door policy and encourage communication, our employees always have access and authority to speak, complaint, question and compliment at all times.",
    },
    {
      img: "/life-at-rdigs/Annual-Award's.png",
      title: "Annual Award's",
      desc: "We work throughout in hopes of success, RDIGS acknowledges the hard work our team puts in place for the growth of the company. Our stars receive 6 figure sums for their hard work and dedication.",
    },
  ];

  const events = [
    { img: "/life-at-rdigs/e1.webp", title: "Team Outing 2023" },
    { img: "/life-at-rdigs/e2.webp", title: "Trip 2023" },
    { img: "/life-at-rdigs/e3.webp", title: "Annual Day 2023" },
    { img: "/life-at-rdigs/e4.webp", title: "Independence Day 2023" },
    { img: "/life-at-rdigs/e5.webp", title: "Women's Day 2023" },
    { img: "/life-at-rdigs/e6.webp", title: "New Year 2023" },
  ]

  return (
    <>
      <div className="bg-[#F2F5F9] py-12">
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
                  We stand by the belief that &quot;Employees are the voice of every organization.&quot; Our commitment goes beyond just work—we strive to
                  excel in everything we do, whether it&apos;s achieving professional milestones or creating memorable moments of fun.
                </p>

                {/* Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">100+</h2>
                    <p className="text-[#000000] font-bold text-[16px] mb-0">Team Members</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">12+</h2>
                    <p className="text-[#000000] font-bold text-[16px] mb-0">Years of Experience</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem]">8+</h2>
                    <p className="text-[#000000] font-bold text-[16px] mb-0">Projects Completed</p>
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
      </div>
      <div className="py-8 px-12">
        <div className="text-center mb-10">
          <h4 className="text-[#3099D5] text-[24px] mb-2 font-semibold">Benefits At RDIGS</h4>
          {/* <h4 className="text-[#3099D5] font-bold text-xl">Benefits At RDIGS</h4> */}
          <p className="max-w-3xl mx-auto mt-3 text-gray-600">
            We encourage our creative RDIGS team to push themselves to new limits
            each day. We have been practicing an open-door policy, so everyone is
            free to discuss any problems and suggestions that help RDIGS become a
            more pleasing place to work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white text-center p-8 rounded shadow-md border-t-4 border-[#3099D5] transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={55}
                height={55}
                className="mx-auto"
              />
              <h5 className="mt-3 font-semibold text-lg">{item.title}</h5>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-3 px-12">
        {/* Section Heading */}
        <div className="mb-8">
          <h4 className="text-[#3099D5] text-[24px] mb-2 text-center font-semibold">
            Our Event&apos;s
          </h4>
        </div>

        {/* Events Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {events.map((event, index) => (
              <div key={index}>
                <Image
                  src={event.img}
                  alt={event.title}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded shadow"
                />
                <h5 className="mt-2 font-bold text-base">{event.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
