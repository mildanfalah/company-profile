import tempe from "../assets/tempe.jpg";
import ragiBasah from "../assets/ragi-basah.png";
import ragiInstant from "../assets/ragi-instant.jpg";

function Product() {
  return (
    <div className="w-4/5 mx-auto my-50">
      <h2 className="font-montserrat font-bold text-4xl mb-8">Our Product</h2>
      <div className="flex gap-10">
        <div className="card flex-1">
          <img
            className="h-70 w-full bg-cover bg-center rounded-2xl shadow-sm shadow-black"
            src={tempe}
            alt="ragi kering tempe"
          />
          <h3 className="font-montserrat font-semibold text-xl mt-4 mb-2">
            Ragi Tempe Kering
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint vel veritatis, reiciendis voluptate qui incidunt facilis, alias
            aliquam delectus repudiandae id, quos provident a dolorem nesciunt
            commodi labore debitis.
          </p>
        </div>
        <div className="card flex-1">
          <img
            className="h-70 w-full bg-cover bg-center rounded-2xl shadow-sm shadow-black"
            src={ragiBasah}
            alt="ragi basah"
          />
          <h3 className="font-montserrat font-semibold text-xl mt-4 mb-2">
            Ragi Basah
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint vel veritatis, reiciendis voluptate qui incidunt facilis, alias
            aliquam delectus repudiandae id, quos provident a dolorem nesciunt
            commodi labore debitis.
          </p>
        </div>
        <div className="card flex-1">
          <img
            className="h-70 w-full bg-cover bg-center rounded-2xl shadow-sm shadow-black"
            src={ragiInstant}
            alt="ragi instant"
          />
          <h3 className="font-montserrat font-semibold text-xl mt-4 mb-2">
            Ragi Instant
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint vel veritatis, reiciendis voluptate qui incidunt facilis, alias
            aliquam delectus repudiandae id, quos provident a dolorem nesciunt
            commodi labore debitis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
