// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 4,
    name: 'Fair HQ',
    image: "images/logs/fairHQ.png",
    designation: 'Software Engineer',
    view: "At Forto, I led a team of five developers, focusing on creating scalable web solutions to meet business needs. I designed and implemented secure authentication systems using OAuth and integrated modern front-end frameworks like Next.js to enhance user experience. Leveraging AWS services such as RDS, EC2, and Lambda, I built and deployed cloud-based applications that improved system scalability and performance. I also delivered data-driven solutions by applying analytical thinking, providing valuable insights for process optimization and enhancing team efficiency.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
  {
    id: 3,
    name: 'Ball Wave Inc',
    image: "images/logs/ballwave.webp",
    designation: 'Senior Developer',
    view: "In my role, I contributed to optimizing development cycles by implementing modern technologies and best practices to meet key business objectives. I focused on designing scalable software architectures, ensuring clean, maintainable code structures. I also leveraged tools like Trello for project management and Git for version control, which enhanced team collaboration and workflow. Additionally, I played a key role in improving team efficiency by fostering a collaborative environment and mentoring peers in software design and delivery best practices.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
  {
    id: 2,
    name: 'Saritasa',
    image: "images/logs/saritasa.png",
    designation: 'Full Stack Engineer',
    view: "I led the full-stack development of web applications utilizing Python, Django, and React, actively contributing to both the frontend and backend to enhance user experience and system performance. I designed and implemented scalable backend architectures, developed efficient APIs, and optimized database interactions to improve data flow and operational efficiency. Collaborating with cross-functional teams, I ensured smooth integration between frontend interfaces and backend systems, streamlining the development process. Additionally, I gained expertise in backend workflows, focusing on modular development, reusable code, and efficient resource management to maintain high-quality and maintainable solutions.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 1,
    name: 'ChargePoint',
    image: "images/logs/charge_point.svg",
    designation: 'Frontend developer',
    view: "I was responsible for implementing Test-Driven Development (TDD) to minimize UI-related bugs and ensure high-quality code. Collaborating with backend, design, and product teams, I helped deliver new features on time. I also optimized web app performance by enhancing load times and improving accessibility. Additionally, I translated Figma designs into fully responsive, pixel-perfect web applications to meet design specifications and deliver a seamless user experience.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 0,
    name: 'Voi Technology',
    image: "images/logs/voi.png",
    designation: 'Junior Developer',
    view: "I strengthened my understanding of computational logic and systems by engaging in hands-on practice with algorithm design, emphasizing time and space complexity optimization. I gained experience in essential software development principles, including front-end technologies such as HTML, CSS, and JavaScript, as well as foundational back-end development concepts. My study of algorithmic thinking enhanced my grasp of search, sorting, and optimization methods, significantly improving code efficiency and logical flow. Additionally, I acquired core IT knowledge, focusing on programming fundamentals, data structures, and problem-solving techniques essential for robust software development.",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
