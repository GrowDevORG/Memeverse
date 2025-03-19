import Image from "next/image"
import Link from "next/link"

export default function TrendingMemes() {
  return (
    <div className="relative w-full bg-orange-500 px-4 py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/4 hidden md:block">
        <Image
          src="/image/bgintrendingpage.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full "
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/4 hidden md:block">
        <Image
          src="/image/bgintrendingpage.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full "
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 -translate-x-1/2 translate-y-1/4 hidden lg:block">
        <Image
          src="/image/bgintrendingpage.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full "
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64  translate-x-1/2 translate-y-1/4 hidden lg:block">
        <Image
          src="/image/bgintrendingpage.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 jaro-regular">Trending memes</h2>

        {/* Timeline steps */}
        <div className="relative mb-8">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-orange-400 z-0"></div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <div className="flex flex-col items-center z-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold mb-2 translate-y-1.5">
                #1
              </div>
            </div>
            <div className="flex flex-col items-center z-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold mb-2 translate-y-1.5">
                #2
              </div>
            </div>
            <div className="flex flex-col items-center z-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold mb-2 translate-y-1.5">
                #3
              </div>
            </div>
          </div>
        </div>

        {/* Meme cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-orange-200 rounded-lg p-4 aspect-square">
            <Image 
            src={"/image/meme1.jpg"}
            alt="Meme 1"
            width={400}
            height={400}
            className="w-full h-full"
            />
          </div>
          <div className="bg-orange-200 rounded-lg p-4 aspect-square">
          <Image 
            src={"/image/meme2.jpg"}
            alt="Meme 1"
            width={400}
            height={400}
            className="w-full h-full"
            />
          </div>
          <div className="bg-orange-200 rounded-lg p-4 aspect-square">
          <Image 
            src={"/image/meme3.jpg"}
            alt="Meme 1"
            width={400}
            height={400}
            className="w-full h-full"
            />
          </div>
        </div>

        {/* Explore more button */}
        <div className="flex justify-center">
          <Link
            href="#"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  )
}

