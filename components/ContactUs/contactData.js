import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'Get In Touch With Us Through Email',
        item1: 'info@nickpetroleum.com',
        // item2: 'info@nickpetroleum.com',
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: 'Call us anytime',
        item1: '+233 000 000 000',
        // item2: '+(098) 098-098-765',
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Visit us at our office',
        item1: '48 Mensah Wood Street',
        item2: 'East Legon, Accra, Ghana',
    },
];

export default contactData;
