import React from "react";
import VideoBackground from "../../Components/videoBackground";
import videoSrc from "../../assets/pacifico37.mp4";
import SplitTextTitle from "../../Components/SplitText";
import Stack from "../../Components/Stack";
import SimpleMap from "../../Components/CustomMap";


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
            splitType="words"
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

      {/* mapa */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-15">
        <div className="order-1 lg:order-none m-5">
          <h1 className="font-vanitasb text-4xl m-3">Contactanos</h1>
          <div>
            <div className="m-2 relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                placeholder="correo@mail.com"
                className="w-full pl-12 pr-3 py-2 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>

            <div className="m-2 relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full pl-12 pr-3 py-2 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>

            <div className="m-2 relative max-w-xs">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns=""
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <input
                type="tel"
                placeholder="Telefono"
                className="w-full pl-12 pr-3 py-2 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>

            <button className="ml-2 lg:ml-42 mt-3 flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg duration-150 hover:bg-white hover:text-black">
              Enviar
            </button>
          </div>
        </div>

        <div className="order-2 lg:order-none w-full lg:w-auto flex justify-center lg:justify-start">
          <SimpleMap />
        </div>
      </div>


    </main>
  );
}
