import building from "../assets/factory-building.jpg";

function About() {
  return (
    <div className="w-4/5 mx-auto my-50 flex gap-8">
      <div className="flex-1">
        <img
          src={building}
          alt="factory building"
          className="rounded-2xl shadow-md shadow-black"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-montserrat font-bold text-4xl mb-4">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fuga in amet corrupti, repellendus et unde, veniam, non enim minus
          inventore! Eius fuga earum optio harum architecto laborum natus
          pariatur! Rem sequi quaerat aut quo dignissimos vero veniam, atque
          velit placeat cumque rerum quae. Accusantium, consectetur quis at
          doloribus velit nobis consequuntur explicabo fugit quae soluta nemo
          libero quos deserunt.
        </p>
      </div>
    </div>
  );
}

export default About;
