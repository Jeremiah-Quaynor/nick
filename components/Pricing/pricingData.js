import { FiCheck } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../../assets/img/home1/gas.jpg';

const pricingData = [
    {
        id: uuidv4(),
        key: '1',
        bgImg: Bg1,
        dollar: '590',
        cent: '00',
        plan: 'Basic Plan',
        type: 'Monthly',
        btnText: 'Get Your Plan Done',
        btnLink: '/contact',
        status: '',
        features: [
            <li key={1}>
                <FiCheck className="icon" />
                Objectively integrate competencies
            </li>,
            <li key={2}>
                <FiCheck className="icon" />
                Process-centric communities
            </li>,
            <li key={3}>
                <FiCheck className="icon" />
                Emasculate holistic innovation
            </li>,
            <li key={4}>
                <FiCheck className="icon" />
                Incubate intuitive opportunities
            </li>,
        ],
    },

    {
        id: uuidv4(),
        key: '2',
        bgImg: Bg1,
        dollar: '590',
        cent: '00',
        plan: 'Basic Plan',
        type: 'Monthly',
        btnText: 'Get Your Plan Done',
        btnLink: '/contact',
        status: 'active',

        features: [
            <li key={1}>
                <FiCheck className="icon" />
                Objectively integrate competencies
            </li>,
            <li key={2}>
                <FiCheck className="icon" />
                Process-centric communities
            </li>,
            <li key={3}>
                <FiCheck className="icon" />
                Emasculate holistic innovation
            </li>,
            <li key={4}>
                <FiCheck className="icon" />
                Incubate intuitive opportunities
            </li>,
            <li key={5}>
                <FiCheck className="icon" />
                Incubate intuitive opportunities
            </li>,
            <li key={6}>
                <FiCheck className="icon" />
                24/7 Online Support
            </li>,
        ],
    },

    {
        id: uuidv4(),
        bgImg: Bg1,
        dollar: '590',
        cent: '00',
        plan: 'Basic Plan',
        type: 'Monthly',
        btnText: 'Get Your Plan Done',
        btnLink: '/contact',
        status: '',

        features: [
            <li key={1}>
                <FiCheck className="icon" />
                Objectively integrate competencies
            </li>,
            <li key={2}>
                <FiCheck className="icon" />
                Process-centric communities
            </li>,
            <li key={3}>
                <FiCheck className="icon" />
                Emasculate holistic innovation
            </li>,
            <li key={4}>
                <FiCheck className="icon" />
                Incubate intuitive opportunities
            </li>,
        ],
    },
];

export default pricingData;
