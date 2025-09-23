'use client';

import Image from "next/image";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ApplyModal from "@/component/ApplyModel/page";


// Define a type for Job
interface Job {
    img: string;
    title: string;
}


export default function CareerIntro() {
    // animation settings
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const jobs = [
        { img: "/career/Lead-generation.png", title: "Lead Generation Executive" },
        { img: "/career/Demand-generation.png", title: "Demand Generation Executive" },
        { img: "/career/Graphic-Design.png", title: "Graphics Designer" },
        { img: "/career/Developer.png", title: "Frontend Developer" },
    ];

    const [selectedJobIndex, setSelectedJobIndex] = useState<number>(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index: number) => {
        setSelectedJobIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedJobIndex(-1);
        setIsModalOpen(false);
    };

    const selectedJob = selectedJobIndex >= 0 ? jobs[selectedJobIndex] : undefined;
    return (
        <div className="container mx-auto px-12 pt-8 pb-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
                {/* Left Side */}
                <motion.div
                    className="flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    variants={fadeInUp}
                >
                    <div className="bg-white rounded p-8 w-full flex flex-col">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[58px]">
                                Join Our Team Ignite Your Career
                            </h1>
                            <p className="mb-4 text-[#606060] leading-relaxed">
                                There’s more to life than a paycheck, and that’s why we prioritize family over everything else. We recognize that the quest for a meaningful and rewarding career can feel daunting at times. Therefore, we endeavor to streamline the process and provide you with an exceptional work environment. </p> <p className=" text-[#606060] leading-relaxed"> Begin your journey with us today by exploring the range of exciting opportunities we have for you. Let’s unlock the door to a fulfilling career together, where your passion aligns with your purpose.
                            </p>
                        </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="bg-[#3099D5] text-white rounded-full py-2 px-6 hover:bg-[#267aa8] transition text-base"
                            >
                                Know More
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    className="flex flex-col justify-between bg-gray-100 mt-1 p-6 rounded gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    variants={fadeInUp}
                >
                    {/* Award Card */}
                    <div className="rounded-lg p-6 text-center mb-4 h-25 w-full bg-white border border-gray-300 px-3 py-6 flex items-center justify-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">
                            We have <strong>25+</strong> award-winning projects
                        </span>
                    </div>

                    {/* Image */}
                    <Image
                        src="/career/careerpageimg.webp"
                        alt="Life at RDIGS"
                        width={800}
                        height={520}
                        className="rounded shadow object-cover w-full max-h-[520px] mb-4"
                    />
                </motion.div>
            </div>

            {/* Job Cards Grid */}
            <div className="text-center mx-auto pb-5 mt-2 max-w-full">
                <h1 className="mb-2 text-[2.5rem] font-bold" style={{ color: "#3099D5" }}>
                    Explore Services
                </h1>
                
                <h4 className=" text-[24px] font-semibold" style={{ color: "#606060" }}>
                    We’re Always Looking For Talented People
                </h4>

                <div className="container mx-auto px-12 pt-4 pb-5">
                    {/* Job Cards */}
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {jobs.map((job, i) => (
                            <div
                                key={i}
                                className="group relative rounded-[15px] border border-[#3099D54D] bg-white text-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-[250px] h-[300px] px-3 flex items-center justify-center"
                            >
                                <div className="flex flex-col justify-center items-center w-full">
                                    <Image
                                        src={job.img}
                                        alt={job.title}
                                        width={80}
                                        height={80}
                                        className="mb-4"
                                    />
                                    <h5 className="text-lg font-semibold">{job.title}</h5>

                                    {/* LINK BUTTON TO OPEN MODAL */}
                                    <button
                                        onClick={() => openModal(i)}
                                        className="mt-4 rounded border border-[#3099D5] px-4 py-2 text-[#3099D5] transition-colors hover:bg-[#3099D5] hover:text-white"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Only render modal when a job is selected */}
                {isModalOpen && selectedJob && (
                    <ApplyModal job={selectedJob} isOpen={isModalOpen} onClose={closeModal} />
                )}
            </div>
        </div>

    );
}
