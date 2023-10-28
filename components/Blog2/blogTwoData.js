import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/Ghana_Link.jpg';
import thumb2 from '../../assets/img/nick_main.jpg';
import thumb3 from '../../assets/img/nick-2.jpeg';
import thumb4 from '../../assets/img/nick-3.jpeg';

const blogTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        meta: '5th May 2022',
        author: 'Della Russel Ocloo',
        title: 'Ghana Nick Danso Adjei picks 2 awards at CEO Visionary Awards',
        link: 'https://www.graphic.com.gh/business/business-news/ghana-link-s-nick-danso-adjei-picks-2-awards-at-ceo-visionary-awards.html',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        meta: '1st Dec 2022',
        author: 'Salman Ahmed',
        title: 'Prices of Petrol and Deisel Reduced Drastically Effective 1st December, 2022',
        link: 'https://m.dailyadvent.com/',
    },
    {
        id: uuidv4(),
        thumbnail: thumb3,
        meta: '28th Jun 2019',
        author: ' Starrfm.com.gh',
        title: 'Nick Petroleum wishes Black Well ahead of Cameroon Clash',
        link: 'https://starrfm.com.gh/2019/06/nick-petroleum-wishes-black-well-ahead-of-cameroon-clash/',
    },
    {
        id: uuidv4(),
        thumbnail: thumb4,
        meta: '5th Aug 2022',
        author: 'Richmond Setrana',
        title: '4 Filling Stations In Ghana That Are Fully Owned By Ghanaians',
        link: 'https://yen.com.gh/real-estate/212907-4-filling-stations-ghana-fully-owned-by-ghanaians/',
    },
];

export default blogTwoData;
