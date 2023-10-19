import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/home3/service1.jpg';
import thumb2 from '../../assets/img/home3/service2.jpg';
import thumb3 from '../../assets/img/home3/service3.jpg';

const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '01',
        heading: 'Our Mission',
        text: 'The mission of Nick Petroleum Ghana Limited is to market quality first grade fuel, provide first class professional services to customers and ensure adequate and reliable supply of petroleum products to ensure private individual satisfaction and ensure business growth.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '02',
        heading: 'Our Vision',
        text: 'The vision of Nick Petroleum Ghana Limited is to become one of a first-class provider of petroleum products and services in Ghana and beyond through the supply of quality products to individual consumers, businesses and the government institutions.',
    },
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '03',
        heading: 'Our Core Values',
        text: `1. Integrity`+ `\n` + `2. Customer Focus`+ `<br/>` + `3. Teamwork`+ `<br/>` + `4. Respect`+ `<br/>` + `5. Excellence`,
    },

    // {
    //     id: uuidv4(),
    //     thumbnail: thumb3,
    //     index: '04',
    //     heading: 'Our History',
    //     text: 'Enim ut tellus elementum sagittis vitae et leo id uisu ut. Amet dictum sit amet justo donec eni um diames vulputate. Arcu felis bibendum',
    // },
];

export default servicesThreeData;
