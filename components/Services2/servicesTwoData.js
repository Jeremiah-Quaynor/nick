import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/nick_main_three.jpg';
import thumb2 from '../../assets/img/retail_food_courts.jpg';
import thumb3 from '../../assets/img/lubricant.jpg';
import thumb4 from '../../assets/img/service4.jpg';
import thumb5 from '../../assets/img/service5.jpg';
import thumb6 from '../../assets/img/service6.jpg';
import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillFuelPumpDieselFill } from 'react-icons/bs';

const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <AiOutlineShop />,
        heading: 'Retail Outlets Developments',
        text: 'Currently Nick Petroleum is developing five (5) ultra-modern retail outlets in Kumasi and Accra. There is new development at East Legon (Lagos Avenue), East Legon (Gethsemane Cemetery), Tema Community 18 near Toyota Head office...',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <AiOutlineShoppingCart />,
        heading: 'Retail Food Courts',
        text: 'Nick Petroleum is on the verge of securing a strategic partnership with Pizza Hut to establish a chain of food courts at selected Nick Petroleum outlets in Accra and Kumasi. This partnership will pronounce and give Nick Petroleum...',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        icon: <BsFillFuelPumpDieselFill />,
        heading: 'Mines Diesel Lubricants',
        text: 'Nick Petroleum has now developed interest in the supply of petroleum products to the mining sectors in Ghana. We have developed partnerships with international oil companies and major oil trading companies in Europe..',
    },

    {
        id: uuidv4(),
        thumbnail: thumb4,
        icon: <FaRegBuilding />,
        heading: 'Investments In Consumer Sites Using Mobile Retail Outlets',
        text: 'Nick petroleum has developed a new strategy to enter the bulk consumer markets where mobile filling station outlets will be provided for bulk consumers of petroleum products...'
    },

    // {
    //     id: uuidv4(),
    //     thumbnail: thumb5,
    //     icon: <FaCity />,
    //     heading: 'Apartment Design',
    //     text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    // },

    // {
    //     id: uuidv4(),
    //     thumbnail: thumb6,
    //     icon: <FaHardHat />,
    //     heading: 'Architecture & Building',
    //     text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    // },
];

export default servicesTwoData;
