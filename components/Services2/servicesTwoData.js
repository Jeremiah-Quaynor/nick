import { v4 as uuidv4 } from "uuid";
import thumb1 from "../../assets/img/DSCF0237.jpg";
import { AiOutlineShop } from "react-icons/ai";

const servicesTwoData = [
  {
    id: uuidv4(),
    thumbnail: thumb1,
    icon: <AiOutlineShop />,
    heading: "Marts",
    text: "Currently Nick Petroleum is developing five (5) ultra-modern marts in Kumasi and Accra. There is new development at East Legon (Lagos Avenue), East Legon (Gethsemane Cemetery), Tema Community 18 near Toyota Head office",
  }
];

export default servicesTwoData;
