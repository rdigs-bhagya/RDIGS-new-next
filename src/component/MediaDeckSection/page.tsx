'use client';

import Image from 'next/image';

export default function MediaDeckSection() {
  return (
    <div className="py-6" style={{ paddingLeft: '2.75rem', paddingRight: '2.75rem' }}>
      <div className="flex flex-col md:flex-row">

        {/* Left container (About Us content) */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="px-4 md:px-0">
            <h1 className="mb-2" style={{ color: '#3099D5', fontSize: '2.5rem', fontWeight: '700' }}>
              Our Strategy, Your Spotlight!
            </h1>
            <h4 className="text-dark" style={{ color: '#606060' , fontSize: '24px', fontWeight: '500'}}>
              See How We Position B2B Brands for Maximum Reach and Revenue Impact.
            </h4>

            <button
              className="mt-4 px-6 py-2"
              style={{
                color: 'white',
                border: '1px solid white',
                background: '#3099D5',
              }}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Download Now
            </button>
          </div>
        </div>

        {/* Right container (Image) */}
        <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src="/home/corporatedeck.png"
            alt="Corporate Deck"
            width={500}
            height={450}
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}
