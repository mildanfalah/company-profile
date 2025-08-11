import bahanRagi from "../assets/bahan-ragi.jpg";
import fermentasi from "../assets/fermentasi.jpg";
import packaging from "../assets/packaging.jpg";
import truck from "../assets/truck.jpg";
import { FaTruck, FaClock, FaEnvira, FaBox } from "react-icons/fa6";

function Process() {
  return (
    <div className="w-4/5 mx-auto my-50">
      <h2 className="font-montserrat font-bold text-4xl mb-10 text-center">
        Our Process
      </h2>
      <div className="flex gap-12 justify-center">
        <div className="">
          <FaEnvira className="text-center mx-auto text-4xl text-blue-600" />
          <p className="text-center font-semibold">Bahan</p>
        </div>
        <div className="">
          <FaClock className="text-center mx-auto text-4xl text-blue-600" />
          <p className="text-center font-semibold">Fermentasi</p>
        </div>
        <div className="">
          <FaBox className="text-center mx-auto text-4xl text-blue-600" />
          <p className="text-center font-semibold">Pengemasan</p>
        </div>
        <div className="">
          <FaTruck className="text-center mx-auto text-4xl text-blue-600" />
          <p className="text-center font-semibold">Distribusi</p>
        </div>
      </div>
      <div className="container-process flex flex-col my-10">
        <div className="flex gap-8 my-10">
          <div className="left-content w-3/5">
            <h3 className="font-montserrat font-semibold text-2xl mb-2">
              Bahan Terpilih
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              officiis vero, ducimus reprehenderit dolorem magni commodi
              deleniti? Illum odit at earum. Magni beatae libero laudantium
              fuga, quod obcaecati ipsam sapiente.
            </p>
          </div>
          <div className="right-content w-2/5">
            <img
              className="rounded-2xl shadow-sm shadow-black"
              src={bahanRagi}
              alt="bahan ragi"
            />
          </div>
        </div>
        <div className="line-connector w-3/5 mx-auto border-r-8 h-10 border-b-8 border-blue-600"></div>
        <div className="line-connector w-3/5 mx-auto border-l-8 h-8 border-blue-600 border-dashed"></div>
        <div className="flex gap-8 my-10">
          <div className="left-content w-2/5">
            <img
              className="rounded-2xl shadow-sm shadow-black"
              src={fermentasi}
              alt="bahan ragi"
            />
          </div>
          <div className="right-content w-3/5">
            <h3 className="font-montserrat font-semibold text-2xl mb-2">
              Fermentasi
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              officiis vero, ducimus reprehenderit dolorem magni commodi
              deleniti? Illum odit at earum. Magni beatae libero laudantium
              fuga, quod obcaecati ipsam sapiente.
            </p>
          </div>
        </div>
        <div className="line-connector w-3/5 mx-auto border-l-8 h-10 border-b-8 border-blue-600"></div>
        <div className="line-connector w-3/5 mx-auto border-r-8 h-8 border-blue-600"></div>
        <div className="flex gap-8 my-10">
          <div className="left-content w-3/5">
            <h3 className="font-montserrat font-semibold text-2xl mb-2">
              Pengemasan Higienis
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              officiis vero, ducimus reprehenderit dolorem magni commodi
              deleniti? Illum odit at earum. Magni beatae libero laudantium
              fuga, quod obcaecati ipsam sapiente.
            </p>
          </div>
          <div className="right-content w-2/5">
            <img
              className="rounded-2xl shadow-sm shadow-black"
              src={packaging}
              alt="bahan ragi"
            />
          </div>
        </div>
        <div className="line-connector w-3/5 mx-auto border-r-8 h-10 border-b-8 border-blue-600"></div>
        <div className="line-connector w-3/5 mx-auto border-l-8 h-8 border-blue-600"></div>
        <div className="flex gap-8 my-10">
          <div className="left-content w-2/5">
            <img
              className="rounded-2xl shadow-sm shadow-black"
              src={truck}
              alt="bahan ragi"
            />
          </div>
          <div className="right-content w-3/5">
            <h3 className="font-montserrat font-semibold text-2xl mb-2">
              Distribusi Cepat
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              officiis vero, ducimus reprehenderit dolorem magni commodi
              deleniti? Illum odit at earum. Magni beatae libero laudantium
              fuga, quod obcaecati ipsam sapiente.
            </p>
          </div>
        </div>
        <h3 className="font-montserrat font-semibold text-3xl my-20 text-center">
          "Kami Pastikan Kualitas Terjamin Di Setiap Proses"
        </h3>
      </div>
    </div>
  );
}

export default Process;
