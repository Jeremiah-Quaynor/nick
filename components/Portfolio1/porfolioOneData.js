import { v4 as uuidv4 } from "uuid";
import Img1 from "../../assets/img/DSCF0234.jpg";
import Img2 from "../../assets/img/DSCF0170.jpg";
import Img3 from "../../assets/img/DSCF0214.jpg";
import Img4 from "../../assets/img/DSCF0205.jpg";

const portfolioOneData = [
  {
    id: uuidv4(),
    image: Img1,
    // category: 'Industrial',
    // client: 'Rosalina D.',
    heading: "Marts",
    desc: `Nick Petroleum currently has eleven (13) marts across Ghana, located in Greater Accra, Central and Ashanti Region. The company has ultramodern fuel service stations designed and built according to international best practices to modernize the face of petroleum marts business in Ghana. We are the only company recognized by National Petroleum Authority in Ghana that incorporates vapor recovery systems in our mart design and build.     
        The following are some of our marts in Accra and Kumasi:
        Dansoman Wesley Grammar Junction Service Station
        Tema Community 18 Service Station
        Spintex Road Service Station
        Odorkor Service Station
        Kotobabi Filling Station
        Manhyia Service Station
        Kwadaso Service Station
        Suame Service Station`,
    // btnText: 'Case Details',
  },

  {
    id: uuidv4(),
    image: Img2,
    // category: 'Existing Bulk Customers',
    // client: 'Rosalina D.',
    heading: "Existing Bulk Customers",
    desc: "Nick Petroleum supplies bulk quantities of petroleum products mainly diesel and gasoline to some major companies in Accra. Some of our bulk consumers are:",
    btnText: "Case Details",
  },

  {
    id: uuidv4(),
    image: Img3,
    category: "Industrial",
    client: "Rosalina D.",
    heading: "Petrol",
    desc: "Petrol, also known as gasoline, is a commonly used fuel for internal combustion engines in vehicles. Derived from crude oil through refining processes, petrol plays a pivotal role in powering automobiles worldwide. Its combustible nature and high energy content make it an efficient choice for fueling engines, contributing to the mobility and transportation sectors. The price of petrol is subject to fluctuations in the global oil market, influencing consumer expenses and impacting economic dynamics. Despite ongoing efforts to transition towards cleaner energy sources, petrol remains a dominant force in the automotive industry, prompting continued discussions on sustainability and alternative fuels.",
    btnText: "Case Details",
  },

  {
    id: uuidv4(),
    image: Img4,
    category: "Industrial",
    client: "Rosalina D.",
    heading: "Lubes",
    desc: "Lubricants, commonly known as lubes, play a crucial role in reducing friction and enhancing the smooth functioning of machinery and mechanical components. These substances are designed to minimize wear and tear, ensuring optimal performance and longevity. In the automotive industry, lubricants are indispensable for engine efficiency, providing a protective layer that minimizes heat and friction. Additionally, in intimate contexts, personal lubricants contribute to a more comfortable and pleasurable experience by reducing friction during various forms of intimacy. The diverse applications of lubes underscore their significance in facilitating smoother operations across different domains.",
    btnText: "Case Details",
  },
  {
    id: uuidv4(),
    image: Img4,
    category: "Industrial",
    client: "Rosalina D.",
    heading: "Diesel",
    desc: "Diesel is a liquid fuel primarily derived from crude oil through a refining process, commonly used to power internal combustion engines in vehicles and machinery. It is known for its high energy density and efficiency, making it a preferred choice for heavy-duty applications such as trucks, buses, and industrial equipment. Diesel engines operate on the principle of compression ignition, where the fuel-air mixture ignites spontaneously due to the high temperature and pressure generated during the compression stroke. Despite its efficiency, diesel fuel has faced environmental scrutiny due to emissions, leading to advancements in cleaner diesel technologies and alternative fuels in recent years. The global demand for diesel remains significant, driving ongoing research and innovation in the pursuit of more sustainable and eco-friendly solutions.",
    btnText: "Case Details",
  },
];

export default portfolioOneData;
