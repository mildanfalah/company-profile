const projectData = [
  {
    name: "DONORIN",
    description:
      "Donorin is a platform designed to connect individuals in urgent need of blood donations with willing donors. Users can register as donors, providing their blood type and availability, while those in need can quickly find and contact nearby donors. Our platform ensures secure communication and coordination, prioritizing privacy and safety to facilitate timely and efficient blood donation connections.",
    link: "https://donorin-b.vercel.app/",
    image: "../assets/donorinpage.png",
  },
];

class ProjectData {
  static getAll() {
    return projectData;
  }
}

export default ProjectData;
