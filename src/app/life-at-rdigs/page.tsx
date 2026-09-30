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
    { img: "/life-at-rdigs/e1.webp", title: "Team Outing" },
    { img: "/life-at-rdigs/e2.webp", title: "Trip" },
    { img: "/life-at-rdigs/e3.webp", title: "Annual Day" },
    { img: "/life-at-rdigs/e4.webp", title: "Independence Day" },
    { img: "/life-at-rdigs/e5.webp", title: "Women's Day" },
    { img: "/life-at-rdigs/e6.webp", title: "New Year" },
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
                  A Place to Grow, Contribute, and Belong
                </h1>

                <p className="text-[#606060] mb-6">
                  At RD Info Global Solutions (RDIGS), we believe people thrive when they’re trusted to take ownership, share ideas, and see the real impact of their work. Our teams bring together diverse skills and perspectives to solve complex challenges for our clients — and we make sure every success is shared. Growth at RDIGS means more than progression. It means learning from experience, experimenting with new ideas, and collaborating across teams to create smarter solutions. We value openness, accountability, and curiosity — the qualities that help us move forward together.
                </p>

                {/* Counters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-2">
                  <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem] lg:text-[2rem] leading-none">60+</h2>
                    <p className="text-[#16243D] font-bold text-[13px] lg:text-[13px] leading-tight mb-0 text-left">Team<br />Members</p>
                  </div>
                  <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem] lg:text-[2rem] leading-none">10+</h2>
                    <p className="text-[#16243D] font-bold text-[13px] lg:text-[13px] leading-tight mb-0 text-left">Years of<br />Experience</p>
                  </div>
                  <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                    <h2 className="text-[#3099D5] font-bold mb-0 text-[2rem] lg:text-[2rem] leading-none">7093+</h2>
                    <p className="text-[#16243D] font-bold text-[13px] lg:text-[13px] leading-tight mb-0 text-left">Projects<br />Completed</p>
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
      {/* How We Work Section */}
      <div className="py-12 px-6 md:px-12 bg-white">
        <div className="text-center mb-10">
          <h4 className="text-[#3099D5] text-[24px] mb-3 font-semibold">How We Work</h4>
          <p className="max-w-4xl mx-auto text-gray-500 text-[15px] md:text-[16px]">
            Our culture is built on shared values that define how we collaborate, grow, and succeed together.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-8 text-center flex flex-col items-center">
            <h5 className="font-bold text-[#16243D] text-[18px] mb-4">Growth Mindset</h5>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              We encourage continuous learning, creative thinking, and ownership at every level. Everyone is supported to stretch their skills and take on new challenges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-8 text-center flex flex-col items-center">
            <h5 className="font-bold text-[#16243D] text-[18px] mb-4">Collaboration</h5>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              We work as one team, across functions and regions, sharing knowledge and celebrating success together.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-8 text-center flex flex-col items-center">
            <h5 className="font-bold text-[#16243D] text-[18px] mb-4">Integrity</h5>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Transparency and honesty shape how we work with clients and with each other. We keep our promises and own our results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-8 text-center flex flex-col items-center">
            <h5 className="font-bold text-[#16243D] text-[18px] mb-4">Recognition</h5>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              We celebrate contributions that make a difference — whether it&apos;s a new idea, a great client outcome, or a team achievement.
            </p>
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
            Our Team in Action
          </h4>
          <p className="max-w-4xl mx-auto text-gray-500 text-[15px] md:text-[16px]">
            From company milestones to team days and celebrations, life at RDIGS is built around connection and shared purpose.
          </p>
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
