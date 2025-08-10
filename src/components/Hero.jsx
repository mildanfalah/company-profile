function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="bg-[url(../assets/man-in-production.jpg)] absolute inset-0 z-0 h-full -left-1 bg-cover bg-center transform -scale-x-100"></div>
      <div className="relative z-30 pt-100 w-5/6 mx-auto">
        {/* <h2 className="text-white text-7xl font-montserrat font-bold italic text-shadow-lg">
          FROM <span className="text-blue-700">FERMENTATION</span> <br /> TO
          <span className="text-amber-300"> PERFECTION</span>
        </h2> */}
        <h2 className="text-white text-7xl font-montserrat font-bold italic text-shadow-lg">
          COMPANY TAGLINE
        </h2>
        <p className="text-gray-300 text-shadow-lg w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          consectetur, ratione modi dolores amet quis. Nostrum sunt natus enim
          sapiente illum voluptatum quasi saepe impedit eaque odit similique,
          possimus voluptatibus?
        </p>
        <button className="py-4 px-12 bg-blue-600 shadow-2xl rounded-xl mt-8 text-white">
          About Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
