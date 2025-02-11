import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";
import {
  FaApple,
  FaAndroid,
  FaCode,
  FaCogs,
  FaBug,
  FaSyncAlt,
} from "react-icons/fa";
import { FaShoppingCart, FaEdit, FaSearch, FaDesktop } from "react-icons/fa";

import logo from "../assets/images/Logo/Logo.png";
export { logo };

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const companyDetails = {
  name: "Ankush Tech Solutions",
  number: "+91-9901252792",
  address: "Aadhya/ #9/731, 9th main, P.J EXT, Davangere-577002",
  email: "abc@xyz.com",
  facebook: "",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const whyChooseUs = {
  mainHeading:
    "At Ankush Tech Solutions, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At Ankush Tech Solutions, we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

// client logos
export const clientLogos = [
  {
    id: 1,
    img: require("../assets/images/clients/1.png"),
  },
  {
    id: 2,
    img: require("../assets/images/clients/2.png"),
  },
  {
    id: 3,
    img: require("../assets/images/clients/3.png"),
  },
  {
    id: 4,
    img: require("../assets/images/clients/4.png"),
  },
  {
    id: 5,
    img: require("../assets/images/clients/5.png"),
  },
  {
    id: 6,
    img: require("../assets/images/clients/6.png"),
  },
  {
    id: 7,
    img: require("../assets/images/clients/7.png"),
  },
];

// all services
export const allServices = [
  {
    image: <FaLaptopCode />,
    title: "Web Development",
    shortDesc:
      "We craft high-performance, responsive websites tailored to your business needs. Our web development solutions ensure a seamless user experience, optimized for speed, security, and engagement.",
    heading: "Web Development: Transform Your Online Presence",
    description:
      "Your website is the digital face of your business. Our expert developers build responsive, SEO-friendly, and feature-rich websites that engage visitors and drive conversions. Whether you need an e-commerce platform, a corporate website, or a custom web app, we deliver solutions that set you apart in the digital landscape.",
  },
  {
    image: <FaMobileAlt />,
    title: "App Development",
    shortDesc:
      "Turn your ideas into reality with our custom mobile app solutions. We design and develop innovative applications for iOS and Android that provide seamless functionality and outstanding user experience.",
    heading: "App Development: Innovative Solutions for Every Business",
    description:
      "Mobile apps are essential for engaging customers in today's fast-paced digital world. Our app development team specializes in building intuitive, high-performance applications that cater to your business objectives. From concept to deployment, we ensure your app meets industry standards and user expectations.",
  },
  {
    image: <FaChartLine />,
    title: "Digital Strategy & Consulting",
    shortDesc:
      "A strong digital strategy is key to online success. We help businesses optimize their digital presence with data-driven insights, targeted marketing, and effective SEO techniques.",
    heading: "Digital Strategy & Consulting: Maximizing Your Online Potential",
    description: `Building an online presence goes beyond just having a website or an app. You need a well-thought-out digital strategy to ensure everything works together to achieve your business objectives. Our team works with you to create a comprehensive digital strategy that drives engagement, conversions, and growth.\n\n      - Digital Marketing Strategy: We develop data-driven strategies that help you reach your audience through the right channels. From SEO and content marketing to social media and paid advertising, we help you create a strong, multi-channel marketing plan that delivers results.\n\n      - User Experience (UX) Strategy: The user experience (UX) is crucial for the success of your website or app. We create strategies that enhance the user journey, improve engagement, and optimize your platform for higher conversions. Our goal is to create a smooth, seamless experience for every user.\n\n      - Conversion Rate Optimization (CRO): We focus on increasing the effectiveness of your website or app by improving key metrics like conversion rates. From refining your design to simplifying user flows, we apply proven techniques to ensure your digital presence delivers the best results possible.\n\n      - Analytics & Reporting: Data is key to understanding what’s working and what’s not. Our team helps you set up the right analytics tools and generates insightful reports that allow you to track performance, identify trends, and make data-backed decisions.`,
  },
];

// services for web development

export const webDevelopmentServices = [
  {
    image: <FaLaptopCode />,
    heading: "Custom Web Development",
    description:
      "We focus on delivering personalized websites that align with your business goals. Whether you’re launching a brand-new site or revamping an existing one, our development team ensures your website is responsive, user-friendly, and optimized for performance across all devices.",
  },
  {
    image: <FaShoppingCart />,
    heading: "E-commerce Development",
    description:
      "If you're looking to take your business online, we build secure, scalable e-commerce websites that make it easy for customers to shop, purchase, and return. We handle everything from custom store designs to payment integration, ensuring your e-commerce platform delivers a seamless shopping experience.",
  },
  {
    image: <FaEdit />,
    heading: "CMS Solutions",
    description:
      "With powerful content management systems like WordPress, Joomla, and Drupal, we give you the tools you need to manage and update your website with ease. We build user-friendly CMS websites that allow you to handle your content without technical expertise.",
  },
  {
    image: <FaDesktop />,
    heading: "Website Redesign",
    description:
      "If your current website feels outdated or isn’t meeting your business goals, we offer redesign services to give your site a fresh, modern look. We’ll enhance both design and functionality to ensure your website works hard for you and your customers.",
  },
  {
    image: <FaSearch />,
    heading: "SEO Optimization",
    description:
      "A great website is only effective if it can be found. Our SEO services ensure that your website is optimized for search engines, improving your visibility and driving organic traffic to your site. From keyword research to on-page optimization, we make sure your site ranks well on search engines.",
  },
  {
    image: <FaSyncAlt />,
    heading: "Website Maintenance & Support",
    description:
      "Your website needs ongoing care to remain secure, up-to-date, and fully functional. We provide comprehensive maintenance and support services to keep your site running smoothly and ensure it remains relevant as your business grows.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <FaMobileAlt />,
    heading: "Custom App Development",
    description:
      "We specialize in building custom mobile apps tailored to your business needs. Whether it’s for iOS, Android, or both, we ensure your app is not only feature-rich but also intuitive, fast, and easy to use for your audience.",
  },
  {
    image: <FaApple />,
    heading: "Native iOS Development",
    description:
      "We offer expert development services for iOS platforms, creating high-performance, native apps that provide seamless user experiences and function flawlessly on Apple devices.",
  },
  {
    image: <FaAndroid />,
    heading: "Native Android Development",
    description:
      "We provide specialized Android app development services, ensuring apps are optimized for performance, security, and user experience across a wide range of Android devices.",
  },
  {
    image: <FaCode />,
    heading: "Cross-Platform App Development",
    description:
      "With cross-platform development frameworks like React Native and Flutter, we develop apps that work across both iOS and Android, reducing development time and costs while ensuring your app performs well on both platforms.",
  },
  {
    image: <FaCogs />,
    heading: "App Integration & API Development",
    description:
      "We understand that many apps need to integrate with other systems or third-party services. Our team can help connect your app to external APIs or integrate it with your existing software to ensure seamless functionality and data sharing.",
  },
  {
    image: <FaBug />,
    heading: "App Testing & Quality Assurance",
    description:
      "We ensure that your app functions smoothly across different devices and platforms. Our rigorous testing process covers all aspects of the app, from functionality to security, ensuring that everything works as it should before launch.",
  },
  {
    image: <FaSyncAlt />,
    heading: "App Support & Maintenance",
    description:
      "After your app is launched, we’re here to provide ongoing maintenance and updates to ensure your app remains up-to-date, secure, and continuously improves to meet the evolving needs of your users.",
  },
];

// portfolio images (web development)

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

// portfolio images (app development)

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
