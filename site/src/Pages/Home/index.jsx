import React from "react";
import VideoBackground from "../../Components/videoBackground";
import videoSrc from "../../assets/pacifico37.mp4";
import SplitTextTitle from "../../Components/SplitText";
import Stack from "../../Components/Stack";


export default function Home() {
  return (
    <main>
      {/* video */}
      <VideoBackground videoSrc={videoSrc}>
        <div className="flex flex-col items-center gap-4">
          <SplitTextTitle
            text="Pacifico 37"
            className="text-2xl font-semibold text-center m-2"
            delay={10}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <p className="font-vanitasr text-2xl">Tu Lugar en la tranquilidad</p>

          <button className="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg duration-150 hover:bg-white hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
            Contactar
          </button>
        </div>
      </VideoBackground>
      {/* Stack */}
      <div className="flex items-center justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-4 w-80 h-80 flex flex-col justify-center text-justify">
            <h1 className="font-vanitasb text-4xl">Lorem ipsum</h1>
            <p className="font-vanitasr text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quia, modi nostrum dignissimos labore sapiente placeat animi magni
            </p>
          </div>
          <div className="flex justify-center mx-4 w-80 h-80">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 280, height: 280 }}
              
            />
          </div>
        </div>
      </div>
      {/* widget */}
      <div className="justify-center mt-15">
        <div className="text-center">
          <h1 className="font-vanitasb text-4xl ">
            Lo que nuestros clientes dicen
          </h1>
        </div>
        <div
          className="elfsight-app-ee27dbe6-4b22-48b6-a31b-0626ff660eb9"
          data-elfsight-app-lazy
        ></div>
      </div>
    </main>
  );
}
