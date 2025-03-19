import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-orange-200 px-4 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-30">
        <Image
          src="/image/bginwhychooseus.png"
          alt=""
          width={224}
          height={224}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 opacity-30">
        <Image
          src="/image/bginwhychooseus.png"
          alt=""
          width={224}
          height={224}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 md:w-56 md:h-56 opacity-30">
        <Image
          src="/image/bginwhychooseus.png"
          alt=""
          width={224}
          height={224}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-56 md:h-56 opacity-30 hidden md:block">
        <Image
          src="/image/bginwhychooseus.png"
          alt=""
          width={224}
          height={224}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56 opacity-30">
        <Image
          src="/placeholder.svg?height=224&width=224"
          alt=""
          width={224}
          height={224}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto  relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Why choose <span className="text-red-500">us</span>?
        </h2>

        <div className="flex flex-col md:flex-row gap-y-9 justify-between items-center mb-16">
          {/* Card 1 */}
          <div className="bg-orange-600 rounded-xl p-6 w-2xs text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Easy-to-Use Editor</h3>
            <p>No design skills? No problem! Just <br /> upload, add text, and boom - <br /> instant meme!</p>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-600 rounded-xl p-6 w-2xs text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Share Instantly</h3>
            <p>Post your memes on social media  or download <br /> them to share anywhere.</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16 hidden">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-red-500 -translate-y-1/2 z-0"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold z-10">
              1
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold z-10">
              2
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold z-10">
              3
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold z-10">
              4
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 3 */}
          <div className="md:col-start-1 md:col-end-2 md:row-start-1 bg-orange-600 rounded-xl p-6 text-white shadow-lg md:ml-auto md:mr-0 md:max-w-md">
            <h3 className="text-2xl font-bold mb-3">Trending Templates</h3>
            <p>Stay ahead of the game with our updated meme templates.</p>
          </div>

          {/* Card 4 */}
          <div className="md:col-start-2 md:col-end-3 md:row-start-1 bg-orange-600 rounded-xl p-6 text-white shadow-lg md:ml-0 md:mr-auto md:max-w-md">
            <h3 className="text-2xl font-bold mb-3">Community Fun</h3>
            <p>Like, comment, and interact with other meme lovers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

