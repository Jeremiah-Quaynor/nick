import { v4 as uuidv4 } from "uuid";
import thumb1 from "../../assets/img/DSCF0237.jpg";
import thumb2 from "../../assets/img/DSCF0214.jpg";
import thumb3 from "../../assets/img/DSCF0205.jpg";
import thumb4 from "../../assets/img/DSCF0209.jpg";
import { AiOutlineShop } from "react-icons/ai";
import { RiOilLine } from "react-icons/ri";

const servicesTwoData = [
  {
    id: uuidv4(),
    thumbnail: thumb1,
    icon: <AiOutlineShop />,
    heading: "Marts",
    text: "Currently Nick Petroleum is developing five (5) ultra-modern marts in Kumasi and Accra. There is new development at East Legon (Lagos Avenue), East Legon (Gethsemane Cemetery), Tema Community 18 near Toyota Head office",
  },
  {
    id: uuidv4(),
    thumbnail: thumb3,
    icon: <RiOilLine />,
    heading: "Lubes",
    text: "Lubricants, commonly known as lubes, play a crucial role in reducing friction and enhancing the smooth functioning of machinery and mechanical components. These substances are designed to minimize wear and tear, ensuring optimal performance and longevity.",
  },
  {
    id: uuidv4(),
    thumbnail: thumb4,
    icon: <RiOilLine />,
    heading: "Petrol",
    text: "Petrol, also known as gasoline, is a commonly used fuel for internal combustion engines in vehicles. Derived from crude oil through refining processes, petrol plays a pivotal role in powering automobiles worldwide.",
  },
  {
    id: uuidv4(),
    thumbnail: thumb2,
    icon: <RiOilLine />,
    heading: "Diesel",
    text: "Currently Nick Petroleum is developing five (5) ultra-modern marts in Kumasi and Accra. There is new development at East Legon (Lagos Avenue), East Legon (Gethsemane Cemetery), Tema Community 18 near Toyota Head office",
  },
];

export default servicesTwoData;
