// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 4,
    name: "Prosa.ai",
    image: "images/logs/fairHQ.png",
    designation: "Senior Full-Stack Developer",
    view: "I integrated NLP, chatbot solutions, and text recognition to enhance user interaction and automate systems. I migrated legacy systems to a microservices architecture, improving scalability and reliability. I worked closely with product and UX teams to design intuitive dashboards and real-time features. Additionally, I implemented Web3.js for Solidity smart contract integration, enabling decentralized applications and seamless blockchain interactions.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
  {
    id: 3,
    name: "Overjet",
    image: "images/logs/ballwave.webp",
    designation: "Senior Software Engineer",
    view: "I led the development of high-performance applications, focusing on scalability and security using Node.js, React, and TypeScript. I migrated legacy systems to a microservices architecture, improving reliability and scalability. I integrated Google Cloud Platform (GCP) services for streamlined deployment, monitoring, and scalability. I enhanced user experience through close collaboration with product and UX teams, designing intuitive dashboards and real-time features. Additionally, I mentored junior developers, fostering innovation and encouraging best practices throughout the team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
  {
    id: 2,
    name: "Chattermill",
    image: "images/logs/saritasa.png",
    designation: "Lead Backend Developer",
    view: "I led backend development for Chattermill’s ride-hailing platform, improving real-time dispatch systems using Node.js and Express.js. I designed and implemented RESTful APIs to enable seamless communication between core services and external partners, integrated PostgreSQL and MongoDB to support high-volume transactions and real-time updates, and implemented CI/CD pipelines to automate deployments, reducing downtime and enhancing reliability. Additionally, I collaborated with cross-functional teams to optimize system architecture and boost performance during peak loads.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/",
  },
  {
    id: 1,
    name: "Ephemeral",
    image: "images/logs/charge_point.svg",
    designation: "Frontend developer",
    view: "I developed dynamic, responsive web applications using React.js and Next.js for the frontend and built scalable backend systems using Python, Flask, and Django. I designed and implemented RESTful APIs to ensure smooth communication between frontend and backend and integrated WebSocket servers for real-time features, enhancing user interactions. I utilized SQL databases like PostgreSQL and MySQL, as well as NoSQL databases like MongoDB and Redis, for efficient data management. Additionally, I deployed applications using AWS, Google Cloud, and Azure, leveraging Docker and Kubernetes for scalability. I ensured high-quality code through unit testing with Jest and managed version control using Git.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
