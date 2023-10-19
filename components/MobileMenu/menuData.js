import React from "react";
import { CgChevronDown, CgChevronLeft } from "react-icons/cg";

const menuData = [
  {
    title: "Home",
    path: "/",
    iconClosed: <CgChevronLeft />,
    iconOpened: <CgChevronDown />,

    // subNav: [
    //     {
    //         title: 'Home One',
    //         path: '/',
    //     },
    //     {
    //         title: 'Home Two',
    //         path: '/home-2',
    //     },

    //     {
    //         title: 'Home Three',
    //         path: '/home-3',
    //     },
    // ],
  },

  {
    title: "Our Company",
    path: "/about/whoWeAre",

    subNav: [
      {
        title: "Our Team",
        path: "/about/team",
        cName: "sub-nav",
      },
      {
        title: "Who We Are",
        path: "/about/whoWeAre",
        cName: "sub-nav",
      },
      {
        title: "Careers",
        path: "/about/careers",
      },
    ],
  },

  // {
  //     title: 'Pages',
  //     path: '/',

  //     iconClosed: <CgChevronLeft />,
  //     iconOpened: <CgChevronDown />,

  //     subNav: [
  //         {
  //             title: 'Team',
  //             path: '/team',
  //             cName: 'sub-nav',
  //         },
  //         {
  //             title: 'Faq',
  //             path: '/faq',
  //             cName: 'sub-nav',
  //         },
  //         {
  //             title: 'Projects',
  //             path: '/projects',
  //         },
  //     ],
  // },

  {
    title: "Services",
    path: "/services",
  },

  {
    title: "News",
    path: "/news",
  },

  {
    title: "Contact",
    path: "/contact",
  },
];

export default menuData;
