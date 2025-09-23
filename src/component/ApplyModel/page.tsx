'use client';
import { FC } from "react";

interface Job {
  img: string;
  title: string;
}

export interface ApplyModalProps {
  job: Job;                  // 👈 Add this
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: FC<ApplyModalProps> = ({ job, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-[#3099D5]">
          Apply for {job.title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill out the form to apply for this position at RDIGS.
        </p>

        {/* Example form */}
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-[#3099D5] text-white py-2 px-4 rounded hover:bg-[#267aa8]"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
