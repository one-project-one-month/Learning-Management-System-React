import React from 'react'

const VideoPlayer = () => {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-purple-200">
        <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoPlayer