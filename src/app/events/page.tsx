import Image from "next/image";

const upcomingEvents = [
    {
        title: "B2B Marketing Live London 2026",
        details: "18–19 November 2026 · ExCeL London",
        description: "RDIGS will be at B2B Marketing Live at London, joining 3,500+ marketing leaders for two days of talks, workshops and networking. We're looking forward to learning from the industry's top brands, exploring the latest in AI, brand, content and data, and meeting new partners.",
        image: "/events/Marketing-b2b.png",
        alt: "B2B Marketing Live, 18–19 November 2026 at ExCeL London",
    },
    {
        title: "The Global ABM Conference 2026",
        details: "4 November 2026 · London",
        description: "RDIGS is attending the Global ABM Conference on 4th November 2026 in London, the industry's biggest event dedicated to account-based marketing. We'll be learning from practitioners with real case studies, roundtables and workshops, alongside peers from 20+ countries. We're looking forward to bringing back practical ABM insights.",
        image: "/events/Global-ABM.png",
        alt: "The Global ABM Conference, 4 November 2026 in London",
    },
];

const events = [
    {
        id: 1,
        location: "Singapore",
        title: "Marketing Conference 2022",
        description:
            "The final day at GITEX brought even more electrifying moments as our team continued to forge powerful new connections with last-minute conversations. Every interaction opened the door to new.",
        image: "/events/Marketing-Confarance-Xpo.jpg",
    },
    {
        id: 2,
        location: "Dubai",
        title: "B2B Marketing Leaders Forum 2022",
        description:
            "The final day at GITEX brought even more electrifying moments as our team continued to forge powerful new connections with last-minute conversations. Every interaction opened the door to new.",
        image: "/events/b2bleadforum.jpeg",
    },
    {
        id: 3,
        location: "Dubai",
        title: "B2B Marketing Expo",
        description: "B2B Marketing Expo 2023",
        image: "/events/B2B-Marketing-Expo.jpg",
    },
    {
        id: 4,
        location: "Dubai",
        title: "GITEX Global 2024",
        description:
            "The final day at GITEX brought even more electrifying moments as our team continued to forge powerful new connections with last-minute conversations. Every interaction opened the door to new.",
        image: "/events/454455 (1).jpg",
    },
];

export default function EventsPage() {
    return (
        <div className="container mx-auto max-w-6xl px-6 py-16">
            <section aria-labelledby="upcoming-events-title" className="mb-16">
                <div className="mx-auto mb-14 text-center">
                    <h1 id="upcoming-events-title" className="text-[44px] font-bold tracking-tight text-[#16243D] md:text-[54px]">
                        Upcoming Events
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {upcomingEvents.map((event, index) => (
                        <article
                            key={event.title}
                            className="group flex transform cursor-pointer flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl wow fadeInUp"
                            data-wow-delay={`${index * 0.15 + 0.1}s`}
                        >
                            <div className="h-[200px] w-full overflow-hidden bg-white p-3">
                                <Image src={event.image} alt={event.alt} width={1200} height={300} className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                            </div>
                            <div className="flex flex-grow flex-col items-center px-6 pb-6 pt-4 text-center">
                                <span className="mb-1 text-[15px] font-medium text-[#3099D5]">{event.details}</span>
                                <h2 className="mb-2 text-[20px] font-bold text-[#16243D] transition-colors duration-300 group-hover:text-[#3099D5] md:text-[22px]">
                                    {event.title}
                                </h2>
                                <p className="max-w-xl text-[14px] leading-relaxed text-gray-500">{event.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section aria-labelledby="past-events-title">
                <div className="mx-auto mb-14 text-center">
                    <h2 id="past-events-title" className="text-[44px] font-bold tracking-tight text-[#16243D] md:text-[54px]">
                        Past Events
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="group flex transform cursor-pointer flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl wow fadeInUp"
                            data-wow-delay={`${(index % 2) * 0.2 + 0.1}s`}
                        >
                            <div className="w-full overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={600}
                                    height={300}
                                    className="h-auto w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                                />
                            </div>
                            <div className="flex flex-grow flex-col items-center px-6 pb-6 pt-4 text-center">
                                <span className="mb-1 text-[15px] font-medium text-[#3099D5]">{event.location}</span>
                                <h3 className="mb-2 text-[20px] font-bold text-[#16243D] transition-colors duration-300 group-hover:text-[#3099D5] md:text-[22px]">
                                    {event.title}
                                </h3>
                                <p className="max-w-md text-[14px] leading-relaxed text-gray-500">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
