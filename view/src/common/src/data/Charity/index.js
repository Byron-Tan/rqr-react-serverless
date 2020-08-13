import bannerSlide1 from "../../assets/image/charity/banner/slide1.png";
import bannerSlide2 from "../../assets/image/charity/banner/slide2.png";
import bannerSlide3 from "../../assets/image/charity/banner/slide3.png";
import bannerSlide4 from "../../assets/image/charity/banner/slide4.jpg";
import featureIcon1 from "../../assets/image/charity/feature/1.svg";
import featureIcon2 from "../../assets/image/charity/feature/2.svg";
import featureIcon3 from "../../assets/image/charity/feature/3.svg";
import featureIcon4 from "../../assets/image/charity/feature/4.svg";
import featureIcon5 from "../../assets/image/charity/feature/5.svg";
import featureIcon6 from "../../assets/image/charity/feature/6.svg";
import thumbImage from "../../assets/image/charity/branch/image.png";
import thumbImage1 from "../../assets/image/charity/branch/image1.png";
import thumbImage2 from "../../assets/image/charity/branch/image2.png";
import thumbImage3 from "../../assets/image/charity/branch/image3.png";
import thumbImage4 from "../../assets/image/charity/branch/image4.png";
import thumbImage5 from "../../assets/image/charity/branch/image5.png";
import mapPin from "../../assets/image/charity/map-pin.svg";
import searchIcon from "../../assets/image/charity/search-icon.svg";
import icon1p from "../../assets/image/charity/icon-100p.svg";
import humanityGlob from "../../assets/image/charity/humanity-glob.png";
import happyKids from "../../assets/image/charity/promotion.svg";
import thumb1 from "../../assets/image/charity/blog/thumb-1.png";
import thumb2 from "../../assets/image/charity/blog/thumb-2.png";
import windows from "../../assets/image/charity/clients/1.png";
import airbnb from "../../assets/image/charity/clients/2.png";
import adidas from "../../assets/image/charity/clients/3.png";
import ibm from "../../assets/image/charity/clients/4.png";
import amazon from "../../assets/image/charity/clients/5.png";
import google from "../../assets/image/charity/clients/6.png";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { github } from "react-icons-kit/fa/github";
import React, { Component } from "react";

/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: "Feature",
    path: "#feature",
    offset: "81",
  },
  {
    label: "Our Branch",
    path: "#branch",
    offset: "100",
  },
  {
    label: "How We Work",
    path: "#work",
    offset: "81",
  },
  {
    label: "Milestones",
    path: "#milestone",
    offset: "81",
  },
  {
    label: "Social Fundraising",
    path: "#socialFundraising",
    offset: "81",
  },
  {
    label: "Community",
    path: "#ourCommunity",
    offset: "81",
  },
  // {
  //   label: "Donate Us",
  //   path: "#donate",
  //   offset: "81",
  // },
  // {
  //   label: "Fundraisers",
  //   path: "#fundraisers",
  //   offset: "81",
  // },
  // {
  //   label: "Our Blog",
  //   path: "#blog",
  //   offset: "81",
  // },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */

export const bannerSlides = [
  {
    id: 1,
    thumb_url: bannerSlide1,
  },
  {
    id: 2,
    thumb_url: bannerSlide2,
  },
  {
    id: 3,
    thumb_url: bannerSlide3,
  },
  {
    id: 4,
    thumb_url: bannerSlide4,
  },
];

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */

export const featureData = {
  title: "They Care, Do You?",
  slogan: "Here is how you can get involved and make a change.",
  features: [
    {
      id: 1,
      icon: featureIcon1,
      title: "Sponsor A Water",
      description:
        "If you want to change the world, one wish at a time, help kids",
    },
    {
      id: 2,
      icon: featureIcon2,
      title: "Pledge For A Cause",
      description: "If you want to change the world, one wish at a time.",
    },
    {
      id: 3,
      icon: featureIcon3,
      title: "Buy a Coffee",
      description: "If you want to change the world, one wish at a time.",
    },
    {
      id: 4,
      icon: featureIcon4,
      title: "Volunteer With Us",
      description:
        "If you want to change the world, one wish at a time, help kids",
    },
    {
      id: 5,
      icon: featureIcon5,
      title: "Partner With Us",
      description: "If you want to change the world, one wish at.",
    },
    {
      id: 6,
      icon: featureIcon6,
      title: "Help us for Educational ",
      description: "If you want to change the world, one wish at a time.",
    },
  ],
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */

export const branchData = [
  {
    id: 1,
    menuItem: "Clean Water",
    image: thumbImage1,
    slogan: "WITH YOUR LOVE",
    title: `We’ve funded <strong>12,925</strong> 
    water projects for 
    <strong>5.2 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 2,
    menuItem: "Sanitation",
    image: thumbImage2,
    slogan: "WITH YOUR CARE",
    title: `We’ve funded <strong>19,571</strong> 
    water projects for 
    <strong>6.7 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 3,
    menuItem: "Hygiene",
    image: thumbImage,
    slogan: "WITH YOUR HELP",
    title: `We’ve funded <strong>29,725</strong> 
    water projects for 
    <strong>8.4 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 4,
    menuItem: "Education",
    image: thumbImage3,
    slogan: "WITH YOUR LOVE",
    title: `We’ve funded <strong>10,792</strong> 
    water projects for 
    <strong>4.9 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 5,
    menuItem: "Australia",
    image: thumbImage4,
    slogan: "WITH YOUR CARE",
    title: `We’ve funded <strong>10,071</strong> 
    water projects for 
    <strong>3.7 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
  {
    id: 6,
    menuItem: "International",
    image: thumbImage5,
    slogan: "WITH YOUR HELP",
    title: `We’ve funded <strong>19,792</strong> 
    water projects for 
    <strong>7.9 million</strong> people
    around the world.`,
    description:
      "Partnering with global charities we have been able to raise much needed funds around the world.",
    linkUrl: "#1",
    linkText: "SEE MORE OF OUR IMPACT",
  },
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */

export const workData = {
  title: "How We Work",
  slogan:
    "RQR is an organisation brining together positive, driven and passionate individuals wanting to make a difference in the world",
  features: [
    {
      id: 1,
      icon: mapPin,
      title: "Campaign Direction",
      description:
        "We develop customized solutions and management plans for your organisation's fundraising goals",
    },
    {
      id: 2,
      icon: searchIcon,
      title: "Feasibility Studies",
      description:
        "Identifying the willingless and readiness of prospective campaign leaders and major gift dornors to lead and give",
    },
    {
      id: 3,
      icon: icon1p,
      title: "100% goes to the charity",
      description: "100% of money donated goes to the charity.",
    },
  ],
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: "OUR FIRST MILESTONE",
  amount: "$4M",
  text: "RAISED TO DATE",
  counterItems: [
    {
      id: 1,
      amount: "154",
      title: "Successful Project",
    },
    {
      id: 2,
      amount: "1534",
      title: "People Impacted",
    },
    {
      id: 3,
      amount: "71",
      title: "Supported Country",
    },
    {
      id: 4,
      amount: "15k",
      title: "Money Donated",
    },
  ],
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */

export const humanityData = {
  image: humanityGlob,
  slogan: "SOCIAL FUNDRAISING",
  title: "We need your help to promote the best in humanity",
  text:
    "We believe that every human being should have the right to health and education. 736 million people live on $2.50 a day. 3.1 million children die a year due to lack of food. ",
  lists: [
    {
      id: 1,
      text: "Let Them Drink Pure",
    },
    {
      id: 2,
      text: "Ensure Them Medicare",
    },
    {
      id: 3,
      text: "Create Opportunity for Education",
    },
  ],
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */

export const promotionData = {
  slogan: "GET YOUR COMMUNITY ON BOARD",
  title: "We are creating a world with basic safety for all.",
  text1:
    "We exist to permanently provide much needed funds to some of the worlds most needed causes",
  text2:
    "We partner with local and international visionaries in volatile confict zones to insure their message is transparently communicated to the public to create momentum and much needed support and funds though regular giving",
  lists: [
    {
      id: 1,
      text: "Let them drink pure",
    },
    {
      id: 2,
      text: "Ensure them medicare",
    },
    {
      id: 3,
      text: "create opportunity of education",
    },
  ],
  image: happyKids,
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: "One Time",
    value: "oneTime",
    text: "One Time donation given",
  },
  {
    id: 2,
    title: "Ongoing",
    value: "ongoing",
    text: "Everymonth donation given",
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: "usd",
    title: "$ USD",
  },
  {
    id: 2,
    value: "gbp",
    title: "£ GBP",
  },
  {
    id: 3,
    value: "cny",
    title: "¥ CNY",
  },
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */

export const posts = [
  {
    id: 1,
    title: "Uganda Embraces South Sudanese Refugees, For Now",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: thumb1,
    btnText: "Learn More ",
    btnUrl: "#1",
  },
  {
    id: 2,
    title: "BRITs Week 2019 together with O2 is here",
    excerpt:
      "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
    thumbUrl: thumb2,
    btnText: "Learn More ",
    btnUrl: "#1",
  },
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */

export const clients = [
  {
    id: 1,
    logo: windows,
    name: "windows",
    link: "#1",
  },
  {
    id: 2,
    logo: airbnb,
    name: "airbnb",
    link: "#2",
  },
  {
    id: 3,
    logo: adidas,
    name: "adidas",
    link: "#3",
  },
  {
    id: 4,
    logo: ibm,
    name: "ibm",
    link: "#4",
  },
  {
    id: 5,
    logo: amazon,
    name: "amazon",
    link: "#5",
  },
  {
    id: 6,
    logo: google,
    name: "google",
    link: "#6",
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: "WE FUNDRAISE FOR",
    menu: [
      {
        id: 1,
        text: "Medical",
        link: "#1",
      },
      {
        id: 2,
        text: "Emergency",
        link: "#1",
      },
      {
        id: 3,
        text: "Memorial",
        link: "#1",
      },
      {
        id: 4,
        text: "Education",
        link: "#1",
      },
      {
        id: 5,
        text: "Charity",
        link: "#1",
      },
      {
        id: 6,
        text: "Nonprofit organization",
        link: "#1",
      },
    ],
  },
  {
    id: 2,
    title: "CONTACT US",
    menu: [
      {
        id: 1,
        text: "How we work",
        link: "mailto:hello@rqr.com.au?subject=Functional Enquiry!",
      },
      {
        id: 2,
        text: "Pricing and Fees",
        link: "mailto:hello@rqr.com.au?subject=Pricing and Fees Enquiry!",
      },
      {
        id: 3,
        text: "Donations",
        link: "mailto:hello@rqr.com.au?subject=Donation Enquiry!",
      },
      {
        id: 4,
        text: "Success stories",
        link: "mailto:hello@rqr.com.au?subject=Success Story Enquiry!",
      },
      {
        id: 5,
        text: "Supported countries",
        link: "mailto:hello@rqr.com.au?subject=Supported Countries Enquiry!",
      },
    ],
  },
  {
    id: 3,
    title: "RESOURCES",
    menu: [
      {
        id: 1,
        text: "Help center",
        link: "#1",
      },
      {
        id: 2,
        text: "Blog",
        link: "#1",
      },
      {
        id: 3,
        text: "GoFundMe Stories",
        link: "#1",
      },
      {
        id: 4,
        text: "Press center",
        link: "#1",
      },
      {
        id: 5,
        text: "Careers",
        link: "#1",
      },
      {
        id: 6,
        text: "About",
        link: "#1",
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: "Privacy Policy",
    link: "1#",
  },
  {
    id: 2,
    text: "Terms and Conditions",
    link: "1#",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={linkedin} />,
    name: "linkedin",
    link: "1#",
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: "facebook",
    link: "2#",
  },
  {
    id: 3,
    icon: <Icon icon={twitter} />,
    name: "twitter",
    link: "3#",
  },
  {
    id: 4,
    icon: <Icon icon={github} />,
    name: "github",
    link: "4#",
  },
];
