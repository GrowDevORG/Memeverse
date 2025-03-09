const Seperation = () => {
  const texts = Array(20).fill("memes"); // Creates an array of 20 "memes"

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-[#D98200] text-white py-2 creepster-regular">
      <div className="flex gap-8 font-bold creepster-regular text-2xl w-max animate-marquee">
        {/* Duplicate the content to create a seamless infinite scroll effect */}
        {[...texts, ...texts].map((text, index) => (
          <span key={index} className="px-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Seperation;
