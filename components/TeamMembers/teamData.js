import { v4 as uuidv4 } from 'uuid';
import member1 from '../../assets/img/team/Chairman.webp';
import member2 from '../../assets/img/team/alidu-002.jpeg';
import member3 from '../../assets/img/team/edward-002.jpeg';
import member4 from '../../assets/img/team/agnes-001.jpeg';
import member5 from '../../assets/img/team/martin-001.jpeg';
import member6 from '../../assets/img/team/kwame-002.jpeg';

const teamData = [
    {
        id: uuidv4(),
        img: member1,
        name: 'NICK DANSO ADJEI',
        position: 'BOARD CHAIRMAN',
        fbLink: '/',
        linkedInLink: '/'
    },

    {
        id: uuidv4(),
        img: member2,
        name: 'ALIDU ZAKARIA',
        position: 'GENERAL MANAGER',
        fbLink: '/',
        linkedInLink: '/'
    },

    {
        id: uuidv4(),
        img: member3,
        name: 'EDWARD BOAMPONG',
        position: 'OPERATIONS MANAGER',
        fbLink: '/',
        linkedInLink: '/'
    },

    {
        id: uuidv4(),
        img: member4,
        name: 'AGNES KWAKYE',
        position: 'HEAD OF HUMAN RESOURCE',
        fbLink: '/',
        linkedInLink: '/',
    },

    {
        id: uuidv4(),
        img: member5,
        name: 'MARTIN OHENE ANIM',
        position: 'HEAD OF FINANCE',
        fbLink: '/',
        linkedInLink: '/'
    },

    {
        id: uuidv4(),
        img: member6,
        name: 'KWAME ADDO OKYERE',
        position: 'HEAD OF MARKETING',
        fbLink: '/',
        linkedInLink: '/'
    },
];

export default teamData;
