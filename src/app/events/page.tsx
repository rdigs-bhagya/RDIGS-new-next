import Image from "next/image";

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
        <div className="container mx-auto py-16 px-6 max-w-6xl">
            {/* Header */}
            <div className="text-center mx-auto mb-14">
                <h1 className="text-[44px] md:text-[54px] font-bold text-[#16243D] tracking-tight">
                    Past Events
                </h1>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col wow fadeInUp cursor-pointer"
                        data-wow-delay={`${(index % 2) * 0.2 + 0.1}s`}
                    >
                        {/* Event Image Banner */}
                        <div className="w-full overflow-hidden">
                            <Image
                                src={event.image}
                                alt={event.title}
                                width={600}
                                height={300}
                                className="w-full h-auto object-cover filter grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                            />
                        </div>

                        {/* Content */}
                        <div className="pt-4 pb-6 px-6 text-center flex flex-col flex-grow items-center">
                            <span className="text-[#3099D5] text-[15px] font-medium mb-1">
                                {event.location}
                            </span>
                            <h3 className="text-[#16243D] text-[20px] md:text-[22px] font-bold mb-2 group-hover:text-[#3099D5] transition-colors duration-300">
                                {event.title}
                            </h3>
                            <p className="text-gray-500 text-[14px] leading-relaxed max-w-md">
                                {event.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
