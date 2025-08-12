import { IoStarSharp } from "react-icons/io5";

function Testimoni() {
  return (
    <div className="w-4/5 mx-auto py-30">
      <h2 className="font-montserrat font-bold text-4xl mb-8 text-center">
        Testimoni
      </h2>
      <div className="flex gap-8">
        <div className="testimonial-card rounded-2xl p-4 shadow-sm shadow-black flex gap-8">
          <div className="left-img flex-1/4 justify-center">
            <img
              className="mx-auto"
              src="https://avatar.iran.liara.run/public/100"
              alt="profile picture"
            />
          </div>
          <div className="right-content flex-3/4 justify-center align-middle my-auto">
            <h3 className="text-lg font-semibold italic">"Ragi Andalan!"</h3>
            <p className="text-gray-500 italic mb-1">
              Sarah Sehan - PT Sukses Jaya Makmur
            </p>
            <div className="text-yellow-400 flex">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              reprehenderit ad dolor ex at iure sunt doloremque possimus.
              Officiis, odit incidunt? Quos, accusantium. Illum deserunt, fugit
              itaque non sed dicta.
            </p>
          </div>
        </div>
        <div className="testimonial-card rounded-2xl p-4 shadow-sm shadow-black flex gap-8">
          <div className="left-img flex-1/4 justify-center">
            <img
              className="mx-auto"
              src="https://avatar.iran.liara.run/public/45"
              alt="profile picture"
            />
          </div>
          <div className="right-content flex-3/4 justify-center align-middle my-auto">
            <h3 className="text-lg font-semibold italic">"Produk Terbaik!"</h3>
            <p className="text-gray-500 italic mb-1">
              John Wick - Continental Hotel
            </p>
            <div className="text-yellow-400 flex">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              reprehenderit ad dolor ex at iure sunt doloremque possimus.
              Officiis, odit incidunt? Quos, accusantium. Illum deserunt, fugit
              itaque non sed dicta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
