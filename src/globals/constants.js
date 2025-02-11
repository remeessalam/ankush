import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";
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
    image: <i className="flaticon-web-development" />,
    heading: "E-commerce Solutions",
    description: "Boost your sales with custom-designed online stores.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "Website Maintenance",
    description: "Keeping your site updated and running smoothly.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "SEO Optimization",
    description:
      "Ensuring your site is easily found with on-page SEO best practices.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "Custom Web Design",
    description:
      "Tailored websites that reflect your brand and engage your target audience",
  },
  {
    image: <i className="flaticon-responsive" />,
    heading: "Responsive Design",
    description:
      "Seamless user experience across all devices—desktop, tablet, and mobile.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <i className="flaticon-app-development" />,
    heading: "Custom App Development",
    description: "Tailored apps designed for your unique business needs.",
  },
  {
    image: <i className="flaticon-software-development" />,
    heading: "Cross-Platform Solutions",
    description:
      "Apps that perform seamlessly across iOS, Android, and web platforms.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "UX/UI Design",
    description:
      "Intuitive and attractive designs for an outstanding user experience.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Backend Development",
    description: "Secure and scalable backend services to support your app.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "App Maintenance and Updates",
    description: "Ensuring your app stays up-to-date and fully functional.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("../assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("../assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("../assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("../assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("../assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("../assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("../assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("../assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("../assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("../assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
