import React from "react";

const videos = [
  { id: 1, src: "/video1.mp4" },
  { id: 2, src: "/video2.mp4" },
];

const Content = () => {
  return (
    <div className="text-black justify-center flex my-5 h-auto w-full lg:w-[60vw]">
      <div className="flex flex-col space-y-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-black h-[40vh] lg:h-[80vh] rounded-lg lg:w-[60vw] w-[90vw] flex items-center justify-center overflow-hidden"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
