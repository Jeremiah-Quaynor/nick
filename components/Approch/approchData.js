import { FaBullseye, FaDraftingCompass, FaHardHat, FaPencilRuler, FaRegHandshake } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';
import { AiOutlineEye } from 'react-icons/ai';

const approchData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <FaBullseye />,
        heading: 'Our Mission',
        text: 'The mission of Nick Petroleum Ghana Limited is to market quality first grade fuel, provide first class professional services to customers and ensure adequate and reliable supply of petroleum products to ensure private individual satisfaction and ensure business growth.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <AiOutlineEye />,
        heading: 'Our Vision',
        text: 'The vision of Nick Petroleum Ghana Limited is to become one of a first-class provider of petroleum products and services in Ghana and beyond through the supply of quality products to individual consumers, businesses and the government institutions.',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <FaRegHandshake />,
        heading: 'Our Core Values',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod',
        btnText: 'Read More',
        pageLink: '/project-details',
    },
];

export default approchData;
