import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from "../components/SEO";

/** @typedef {{id:number,title:string,category:string,description:string,videoUrl:string}} VideoResource */

const videoResources = [
  {
    id: 1,
    title: 'Key to success in IT Industry',
    category: 'Soft skills',
    description: 'Learn how to be successful in tech industry.',
    videoUrl: 'https://www.youtube.com/watch?v=g6xVt5-7U_8'
  },
  {
    id: 2,
    title: 'Web Apps Security',
    category: 'Web development',
    description: 'How you can secure your web apps.',
    videoUrl: 'https://www.youtube.com/watch?v=OATI4taKT7s'
  },
  {
    id: 3,
    title: 'React Hackathon',
    category: 'UI development',
    description: 'Create React web app from scratch',
    videoUrl: 'https://www.youtube.com/watch?v=rb0Pl8XeRvo'
  },
  {
    id: 4,
    title: 'Hangfire Hackathon',
    category: 'Web development',
    description: '.Net core hangfire hackathon from scratch',
    videoUrl: 'https://www.youtube.com/watch?v=6Yg1AzIhYo4'
  }
]

/** @param {string} url */
function getYoutubeId(url) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1)
    return u.searchParams.get('v')
  } catch (e) {
    return null
  }
}

/** @param {string} videoUrl */
function getYoutubeEmbedUrl(videoUrl) {
  const id = getYoutubeId(videoUrl)
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : ''
}

export default function TrainingResources() {
  const [activeVideo, setActiveVideo] = useState(/** @type {VideoResource | null} */ (null))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO
        title="Training Resources | Khan Tech"
        description="Access Khan Tech Services training resources, guides, and learning materials for software and business technology."
        keywords="training resources, learning materials, software guides, Khan Tech, development tutorials"
        url="https://www.khantechservices.online/#/training-resources"
        image="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/41e80803d_generated_f75401f5.png"
      />
      {/* Hero / Header Section */}
      <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/41e80803d_generated_f75401f5.png"
            alt="Technology services"
            className="w-full h-full object-cover opacity-10"
          />
      </div>
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Training & Resources</h1>
        <p className="mt-4 text-lg text-slate-200">
          We provide professional technology training to help you master modern development stacks mentioned in{' '}
          <Link to="/services" className="text-indigo-200 hover:text-white font-semibold">
            Services
          </Link>{' '}
          page.
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Contact Us for Custom Training
          </Link>
        </div>
      </header>

      {/* Video Resources Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Past Technology Videos & Tutorials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoResources.map((video) => {
            const id = getYoutubeId(video.videoUrl)
            const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null

            return (
              <article key={video.id} className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col border border-slate-200">
                <div className="relative bg-gray-100 h-56 sm:h-52 md:h-56 flex-shrink-0">
                  {thumb ? (
                    <>
                      <img src={thumb} alt={video.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => setActiveVideo(video)}
                          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-black shadow-lg hover:bg-white transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518 3.76A1 1 0 017 13.999V6.501a1 1 0 011.234-.97l6.518 1.84a1 1 0 010 1.877z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-xs inline-flex items-center px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold">{video.category}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{video.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 flex-1">{video.description}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition"
                    >
                      Play Video
                    </button>
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-medium rounded-full transition"
                    >
                      Open on YouTube
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 text-white">
              <div>
                <p className="text-sm font-semibold">Now Playing</p>
                <p className="text-base">{activeVideo.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="text-white hover:text-slate-200"
              >
                Close
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src={getYoutubeEmbedUrl(activeVideo.videoUrl)}
                title={activeVideo.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
