import {
    android,
    facebook, linkdin, mysql,
    nodejs,
    react, youtube, tailwind, mongo, javascript, okcl, insta2, chat
} from "../assets"

export const AppText = {
    hello: 'Hello,',
    Iam: 'I am ',
    Soumya: 'Soumya Sundar Mohapatra',
    aboutMeDescripion: 'I am a diligent and innovative full-stack developer with a passion for crafting robust and user-centric web applications. With a solid foundation in both frontend and backend technologies, I excel in leveraging the latest tools and frameworks to deliver seamless and intuitive user experiences. My expertise lies in designing and implementing scalable architectures, optimizing performance, and ensuring seamless integration across the stack. I thrive in dynamic environments where I can apply my problem-solving skills and collaborate with cross-functional teams to bring creative ideas to life. As a proactive learner, I am committed to staying abreast of emerging technologies and best practices in the ever-evolving field of web development.',
    Skills: 'Skills & ',
    Experties: 'Experties',
    UIUXDesigner: 'UI/UX Designer',
    BackendDeveloper: 'Backend Dev',
    FrontedDeveloper: 'Frontend Dev',
    FullStackDeveloper: 'FullStack Dev',
    Portfolio: 'Portfolio',
    Creative: 'My Creative ',
    CompaniesI: 'Companies I ',
    WorkedFor: 'Worked For',
    Contact: 'Contact ',
    Us: 'Me',
    copywriteText: 'Copyright by Soumya Sundar Mohapatra @2024'

}

export const aboutSection = [

    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
        title: 'Frontend Developer',
        desc: 'Expert in FrontEnd Responsive web designing'
    },
    {
        id: 2,
        image: 'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
        title: 'Back-end Developer',
        desc: 'Expert in BackEnd Data Handling With Efficient Management'
    }
]

export const skillsList = [

    {
        id: 1,
        icon: react
    },
    {
        id: 2,
        icon: javascript
    },
    {
        id: 3,
        icon: tailwind
    },
    {
        id: 4,
        icon: mongo
    },


    {
        id: 5,
        icon: android
    },

    {
        id: 6,
        icon: mysql
    },
    {
        id: 7,
        icon: react
    },


    {
        id: 8,
        icon: nodejs
    },

]

export const workDetail = [
    {
        id: 1,
        year: '2023',
        compnayName: 'OCAC Tower',
        position: ' Java Developer Intern'
    },
    {
        id: 1,
        year: '2024',
        compnayName: 'OKCL Corporate Limited',
        position: 'Software Developer Intern'
    },

]

export const portfolio = [
    {
        id: 1,
        title: 'Blog AppLication',
        type: 'website',
        desc: "App Build using React and Node js with MongoDB database with proper data handling",
        imageUrl: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1708668334~exp=1708671934~hmac=650f6162992a5748907983d54bb51873a251d3cbb8c429dd014f4a0e01acfc19&w=1380",
        website: "https://github.com/Sbabu201/Blog-app",
        detailedDescription: "I developed a feature-rich chat application using the MERN stack, Socket.IO, Redux Toolkit, and Tailwind CSS. This Instagram-like chat app supports real-time messaging, group chats, and user presence indicators. With MongoDB for data storage and Node.js with Express.js for the backend, the app ensures scalability and robust performance. On the frontend, React with Redux Toolkit manages state efficiently, providing a seamless user experience. Tailwind CSS enables rapid UI development, ensuring a modern and responsive design. The app's intuitive interface, coupled with Socket.IO for real-time communication, delivers an engaging user experience akin to popular social media platforms."

    },
    {
        id: 2,
        title: 'E-Commerce PlatForm ',
        type: 'website',
        desc: "App Build using React and Node js With Proper Shopping management where you can buy and view all products ",
        imageUrl: "https://img.freepik.com/free-photo/photocomposition-horizontal-online-shopping-banner_23-2151201763.jpg?t=st=1708668576~exp=1708672176~hmac=82e0aac294e6451c15ea5877cffb4d511cb10c2b4bdc5259573d786cf5688a26&w=1380",
        website: "https://e-commerce-pi-two.vercel.app/",
        detailedDescription: "I developed a modern e-commerce platform using the MERN stack, with Redux Toolkit for efficient state management and Tailwind CSS for responsive design. The backend, built with Node.js and Express.js, provided secure RESTful APIs for product catalogs, user authentication, and order processing. MongoDB was used to store product details, user information, and order data. The frontend, built with React, featured a clean interface and dynamic product displays. Socket.IO was integrated for real-time order tracking and customer support, creating a seamless shopping experience."
    },
    {
        id: 3,
        title: 'Chatting-App ',
        type: 'website',
        desc: "Social media App Build using React and Nodejs and socket.io  where you can chat in realtime and explore the app  ",
        imageUrl: chat,
        website: "https://chat-app-client-ebon.vercel.app/",
        detailedDescription: "I developed a feature-rich chat application using the MERN stack, Socket.IO, Redux Toolkit, and Tailwind CSS. This Instagram-like chat app supports real-time messaging, group chats, and user presence indicators. With MongoDB for data storage and Node.js with Express.js for the backend, the app ensures scalability and robust performance. On the frontend, React with Redux Toolkit manages state efficiently, providing a seamless user experience. Tailwind CSS enables rapid UI development, ensuring a modern and responsive design. The app's intuitive interface, coupled with Socket.IO for real-time communication, delivers an engaging user experience akin to popular social media platforms."
    },



]

export const CompanyImage = [
    // {
    //     id: 1,
    //     imageUrl: cognizantLogo
    // },
    {
        id: 1,
        imageUrl: okcl
    },
    // {
    //     id: 1,
    //     imageUrl: aflacLogo
    // },
    // {
    //     id: 1,
    //     imageUrl: wiuLogo
    // }
]

export const socialNetwork = [
    {
        id: 1,
        logo: insta2,
        url: 'https://www.instagram.com/_babu.55_/'
    },
    {
        id: 2,
        logo: youtube,
        url: 'https://github.com/Sbabu201',
    },
    {
        id: 3,
        logo: linkdin,
        url: 'https://www.linkedin.com/in/soumya-sundar-mohapatra-a59053265/'
    },
    {
        id: 4,
        logo: facebook,
        url: 'https://www.facebook.com/soumya.babu.9634'
    },
]