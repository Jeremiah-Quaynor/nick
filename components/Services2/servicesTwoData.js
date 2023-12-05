import {
  FaCity,
  FaDraftingCompass,
  FaHardHat,
  FaRegBuilding,
  FaTruckMoving,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import thumb1 from "../../assets/img/nickTwo.jpg";
import thumb2 from "../../assets/img/retail_food_courts.jpg";
import thumb3 from "../../assets/img/lubricant.jpg";
import thumb4 from "../../assets/img/service4.jpg";
import thumb5 from "../../assets/img/service5.jpg";
import thumb6 from "../../assets/img/service6.jpg";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

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
