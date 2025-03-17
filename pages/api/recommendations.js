// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 6,
    name: "Prosa.ai",
    image: "images/logo.png",
    designation: "Senior Full-Stack Developer",
    view: "I enhanced user interaction and system automation by integrating NLP, chatbot solutions, and text recognition using Python, TensorFlow, DeepSpeech, and NLTK. I migrated legacy systems to a scalable microservices architecture with Docker, Kubernetes, and Python, significantly improving reliability and performance. I collaborated with product and UX teams to design intuitive, real-time dashboards using React, Redux, TypeScript, and Splunk for effective monitoring and data visualization. Additionally, I developed AI-driven automation solutions, leveraging Prolog for logical inference and OpenAI Gym for reinforcement learning, optimizing intelligent decision-making processes. To ensure high-quality deliverables, I implemented comprehensive testing strategies using Jest and Cypress.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
  {
    id: 5,
    name: "Overjet",
    image: "images/logo.png",
    designation: "Senior Software Engineer",
    view: "I directed technical development for complex projects, leveraging Next.js, Nest.js, GraphQL, Apollo, Tailwind CSS, AWS, and PostgreSQL to deliver high-quality solutions. I enhanced system infrastructure by implementing Terraform, improving scalability, automation, and maintainability. Additionally, I established standardized CI/CD pipelines to accelerate deployment processes and ensure reliability. By building robust APIs with Nest.js and developing reusable UI components using React and TypeScript, I supported a wide range of product features, ensuring efficiency and consistency across projects.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
  {
    id: 4,
    name: "FlairsTech",
    image: "images/logo.png",
    designation: "FullStack Developer",
    view: "I developed responsive web applications using React, Redux, and Redux-Saga, delivering efficient state management and optimized user interfaces. I built RESTful APIs with Python and Django, integrating Firebase for real-time data synchronization and seamless user authentication. To enhance backend performance, I optimized databases with Amazon RDS, implemented GraphQL for flexible data querying, and incorporated WebSocket for real-time functionality. Collaborating with cross-functional teams, I refined system architecture to ensure scalability and robust performance under high traffic conditions.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
  {
    id: 3,
    name: "Chattermill",
    image: "images/logo.png",
    designation: "Lead Backend Developer",
    view: "I spearheaded backend development for a ride-hailing platform, optimizing real-time dispatch systems with Node.js and Express.js. I designed and deployed RESTful APIs to enable seamless communication between core services and external partners, while enhancing data handling and system performance by integrating PostgreSQL and MongoDB for high-volume transactions. By establishing CI/CD pipelines, I automated deployments, reducing downtime and improving operational reliability. Collaborating closely with stakeholders, I improved system architecture to ensure peak performance during high-load scenarios.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/",
  },
  {
    id: 2,
    name: "Tourlane",
    image: "images/logo.png",
    designation: "Frontend Developer",
    view: "I developed dynamic and interactive web applications using React.js, creating intuitive user interfaces while managing application state with Redux and implementing Redux-Saga for efficient asynchronous operations. I designed pixel-perfect, responsive layouts with Tailwind CSS, ensuring a consistent user experience across all devices, and built reusable, modular UI components to enhance code maintainability and scalability. By adhering to industry best practices, I optimized user interactions and application performance for seamless functionality.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/",
  },
  {
    id: 1,
    name: "Ephemeral",
    image: "images/logo.png",
    designation: "Frontend developer",
    view: "I developed highly responsive web applications using React.js and Next.js to deliver scalable and dynamic frontends, while engineering backend systems with PHP and Laravel to ensure robust functionality and reliability. I designed and implemented RESTful APIs to streamline communication between frontend and backend systems, integrated real-time capabilities using WebSocket, and optimized data management with PostgreSQL and MongoDB. Additionally, I deployed applications using AWS, Google Cloud, and Kubernetes, leveraging containerization to enhance scalability and operational efficiency.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
