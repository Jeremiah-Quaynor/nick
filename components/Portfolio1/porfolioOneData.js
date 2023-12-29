import { v4 as uuidv4 } from "uuid";
import Img1 from "../../assets/img/DSCF0234.jpg";
import Img2 from "../../assets/img/DSCF0170.jpg";

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

  // {
  //     id: uuidv4(),
  //     image: Img1,
  //     category: 'Industrial',
  //     client: 'Rosalina D.',
  //     heading: 'Leverage agile motive frameworks',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui',
  //     btnText: 'Case Details',
  // },

  // {
  //     id: uuidv4(),
  //     image: Img1,
  //     category: 'Industrial',
  //     client: 'Rosalina D.',
  //     heading: 'Leverage agile motive frameworks',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui',
  //     btnText: 'Case Details',
  // },
];

export default portfolioOneData;
